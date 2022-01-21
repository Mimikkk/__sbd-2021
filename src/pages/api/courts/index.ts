import { translateCourt, createCourt } from "$sql/orm";
import { createHandler } from "$/api";
import { createFilteredListGet, createListPost } from "$/api/list.utils";

const name = "court";
export default createHandler({
  get: createFilteredListGet({ name, translateFn: translateCourt }),
  post: createListPost({ name, createFn: createCourt }),
});
