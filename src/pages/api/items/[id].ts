import { createHandler } from "$/api";
import { createListDelete, createListPut } from "$/api/list.utils";
import { deleteItem, updateItem } from "$sql/orm";

export default createHandler({
  put: createListPut({ updateFn: updateItem }),
  delete: createListDelete({ deleteFn: deleteItem }),
});
