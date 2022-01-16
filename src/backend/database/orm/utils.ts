import { SqlCommand, SqlResponse } from "$sql/types";
import { uuid } from "@internal/types";
import { entries, fromPairs, keys, snakeCase } from "lodash";

export type TranslationMap<T extends object> = Record<
  keyof T,
  (value: T[keyof T]) => any
>;

export type SqlMap<T extends object> = Record<
  keyof T,
  (value: SqlResponse) => T[keyof T]
>;

export const str = (value: SqlResponse) => `'${value}'`;
export const nil = (value: SqlResponse) => (value ? str(value) : "null");
export const num = (value: SqlResponse) => value;
export const quote = (value: SqlResponse) => `"${value}"`;

type Pair = [any, any];
export const createTranslation =
  <T extends object>(fields: SqlMap<T>) =>
  (entity: SqlResponse): T => {
    const result = ([field, fn]: Pair) => [field, fn(entity[snakeCase(field)])];

    return fromPairs(entries(fields).map(result)) as T;
  };

export const createCreate =
  <T extends object>(table: string, translations: TranslationMap<T>) =>
  (model: T): SqlCommand => {
    const fields = keys(translations).map(snakeCase).map(quote).join(", ");
    const setter = ([field, fn]: Pair) => fn(model[field as keyof T]);

    console.log(`
        insert into ${table}(${fields})
        values (${entries(translations).map(setter).join(", ")});
      `);
    return `
        insert into ${table}(${fields})
        values (${entries(translations).map(setter).join(", ")});
      `;
  };

export const createUpdate =
  <T extends object>(table: string, translations: TranslationMap<T>) =>
  (id: uuid, model: T): SqlCommand => {
    const setter = ([field, fn]: Pair) =>
      `${quote(snakeCase(field))} = ${fn(model[field as keyof T])}`;

    return `
        update ${table}
        set ${entries(translations).map(setter).join(", ")}
        where id = ${str(id)};
      `;
  };

export const createDelete =
  (table: string) =>
  (id: uuid): SqlCommand =>
    `delete from ${table} where id = ${str(id)};`;
