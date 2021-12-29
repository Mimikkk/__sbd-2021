import { createHandler } from "$/api";
import { createListDelete, createListPut } from "$/api/list.utils";
import { deletePrice, updatePrice } from "$sql/orm";

export default createHandler({
  put: createListPut({ updateFn: updatePrice }),
  delete: createListDelete({ deleteFn: deletePrice }),
});
