import { translateCourt, createCourt } from "$sql/orm";
import { createHandler } from "$/api";
import { createListGet, createListPost } from "$/api/list.utils";

const name = "court";
export default createHandler({
  get: createListGet({ name, translateFn: translateCourt }),
  post: createListPost({ name, createFn: createCourt }),
});
