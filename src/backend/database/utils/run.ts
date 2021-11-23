import { client } from "$sql";
import { SqlCommand, SqlResponse } from "$sql/types";

export const run = (command: SqlCommand): Promise<SqlResponse> =>
  client.$executeRawUnsafe(command);
