import { createHandler } from "$/api";
import { createListGet, createListPost } from "$/api/list.utils";
import { createCourtReservation, translateCourtReservation } from "$sql/orm";

const name = "court_reservation";
export default createHandler({
  get: createListGet({ name, translateFn: translateCourtReservation }),
  post: createListPost({ name, createFn: createCourtReservation }),
});
