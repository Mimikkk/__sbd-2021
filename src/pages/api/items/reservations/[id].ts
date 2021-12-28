import { createHandler } from "$/api";
import { createListDelete, createListPut } from "$/api/list.utils";
import { deleteItemReservation, updateItemReservation } from "$sql/orm";

export default createHandler({
  put: createListPut({ updateFn: updateItemReservation }),
  delete: createListDelete({ deleteFn: deleteItemReservation }),
});
