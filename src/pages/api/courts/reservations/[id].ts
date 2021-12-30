import { createHandler } from "$/api";
import { createListDelete, createListPut } from "$/api/list.utils";
import { deleteCourtReservation, updateCourtReservation } from "$sql/orm";

export default createHandler({
  put: createListPut({ updateFn: updateCourtReservation }),
  delete: createListDelete({ deleteFn: deleteCourtReservation }),
});
