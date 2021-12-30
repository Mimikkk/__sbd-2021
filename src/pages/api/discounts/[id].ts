import { createHandler } from "$/api";
import { createListDelete, createListPut } from "$/api/list.utils";
import { deleteDiscount, updateDiscount } from "$sql/orm";

export default createHandler({
  put: createListPut({ updateFn: updateDiscount }),
  delete: createListDelete({ deleteFn: deleteDiscount }),
});
