import { createHandler } from "$/api";
import { createListDelete, createListPut } from "$/api/list.utils";
import { deleteTransaction, updateTransaction } from "$sql/orm";

export default createHandler({
  put: createListPut({ updateFn: updateTransaction }),
  delete: createListDelete({ deleteFn: deleteTransaction }),
});
