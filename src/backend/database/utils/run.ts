import { client } from "$sql";
import { SqlCommand, SqlResponse } from "$sql/types";

export const run = async (command: SqlCommand): Promise<SqlResponse> =>
  client.$executeRawUnsafe(command);
