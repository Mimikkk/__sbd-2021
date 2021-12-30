import { createHandler } from "$/api";
import { createListGet, createListPost } from "$/api/list.utils";
import { createItem, translateItem } from "$sql/orm";

const name = "item";
export default createHandler({
  get: createListGet({ name, translateFn: translateItem }),
  post: createListPost({ name, createFn: createItem }),
});
