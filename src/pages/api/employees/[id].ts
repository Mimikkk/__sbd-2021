import { createHandler } from "$/api";
import { createListDelete, createListPut } from "$/api/list.utils";
import { deleteEmployee, updateEmployee } from "$sql/orm";

export default createHandler({
  put: createListPut({ updateFn: updateEmployee }),
  delete: createListDelete({ deleteFn: deleteEmployee }),
});
