import { client } from "$sql";
import { map } from "lodash";
import { SqlResponse } from "$sql/types";

export const select = (str: TemplateStringsArray): Promise<SqlResponse> =>
  client.$queryRaw(str);

export const selectWith =
  <T = any>(translate: (item: SqlResponse) => T) =>
  async (str: TemplateStringsArray): Promise<T | T[]> => {
    const raw = await select(str);

    return Array.isArray(raw)
      ? map(raw, (item) => translate(item))
      : translate(raw);
  };
