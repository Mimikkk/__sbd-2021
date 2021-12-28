import { createHandler } from "$/api";
import { createClient, translateClient } from "$sql/orm";
import { createListGet, createListPost } from "$/api/list.utils";

const name = "client";
export default createHandler({
  get: createListGet({ name, translateFn: translateClient }),
  post: createListPost({ name, createFn: createClient }),
});
