import { deleteCourt, updateCourt } from "$sql/orm";
import { createHandler } from "$/api";
import { createListDelete, createListPut } from "$/api/list.utils";

export default createHandler({
  put: createListPut({ updateFn: updateCourt }),
  delete: createListDelete({ deleteFn: deleteCourt }),
});
