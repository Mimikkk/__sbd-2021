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

export const str = (value: SqlResponse) => `${value}`;
export const nil = (value: SqlResponse) => (value ? str(value) : null);
export const num = (value: SqlResponse) => value;

export const createTranslation =
  <T extends object>(fields: SqlMap<T>) =>
  (entity: SqlResponse): T =>
    fromPairs(
      entries(fields).map(([field, fn]) => [
        field,
        (fn as any)(entity[snakeCase(field)]),
      ])
    ) as any;

export const createCreate =
  <T extends object>(table: string, translations: TranslationMap<T>) =>
  (model: T) =>
    `
        insert into ${table}(${keys(translations).map(snakeCase).join(", ")})
        values (${entries(translations)
          .map(([field, fn]) => (fn as any)(model[field as keyof T]))
          .join(", ")});
      `;

export const createUpdate =
  <T extends object>(table: string, translations: TranslationMap<T>) =>
  (id: uuid, model: T) =>
    `
        update ${table}
        set ${entries(translations)
          .map(
            ([field, fn]) =>
              `${field} = ${(fn as any)(model[field as keyof T])}`
          )
          .join(", ")}
        where id = ${str(id)};
      `;

export const createDelete =
  (table: string) =>
  (id: uuid): SqlCommand =>
    `delete from ${table} where id = ${str(id)};`;
