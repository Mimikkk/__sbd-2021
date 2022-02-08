import { client } from "$sql";
import { map } from "lodash";
import { SqlCommand, SqlResponse } from "$sql/types";

export const select = (
  str: TemplateStringsArray | string
): Promise<SqlResponse> =>
  typeof str === "string" ? client.$queryRawUnsafe(str) : client.$queryRaw(str);

export const selectWith =
  <T = any>(translate: (item: SqlResponse) => T) =>
  async (
    [first, second]: TemplateStringsArray,
    name: string
  ): Promise<T | T[]> => {
    const raw = await select(`${first}${name}${second}`);

    return Array.isArray(raw) ? map(raw, translate) : (translate(raw) as any);
  };

export const selectNewestFootprintId = (name: string): SqlCommand => `
  select id, created_at from ${name} order by created_at desc limit 1;
`;

export const selectLastUpdatedFootprintId = (name: string): SqlCommand => `
  select id, updated_at from ${name} order by updated_at desc limit 1;
`;
