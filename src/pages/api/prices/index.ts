import { createHandler } from "$/api";
import { createListGet, createListPost } from "$/api/list.utils";
import { createPrice, translatePrice } from "$sql/orm";

const name = "price";
export default createHandler({
  get: createListGet({ name, translateFn: translatePrice }),
  post: createListPost({ name, createFn: createPrice }),
});
