import { createHandler } from "$/api";
import { createListGet, createListPost } from "$/api/list.utils";
import { translateTransaction, createTransaction } from "$sql/orm";

const name = "transaction";
export default createHandler({
  get: createListGet({ name, translateFn: translateTransaction }),
  post: createListPost({ name, createFn: createTransaction }),
});
