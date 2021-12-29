import { createHandler } from "$/api";
import { createListGet, createListPost } from "$/api/list.utils";
import { createDiscount, translateDiscount } from "$sql/orm";

const name = "discount";
export default createHandler({
  get: createListGet({ name, translateFn: translateDiscount }),
  post: createListPost({ name, createFn: createDiscount }),
});