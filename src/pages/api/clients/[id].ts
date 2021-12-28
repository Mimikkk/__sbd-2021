import { createHandler } from "$/api";
import { deleteClient, updateClient } from "$sql/orm";
import { createListDelete, createListPut } from "$/api/list.utils";

export default createHandler({
  put: createListPut({ updateFn: updateClient }),
  delete: createListDelete({ deleteFn: deleteClient }),
});
