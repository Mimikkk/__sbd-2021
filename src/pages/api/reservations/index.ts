import { translateReservation } from "$sql/orm";
import { createHandler } from "$/api";
import { createListGet } from "$/api/list.utils";

const name = "reservation";
export default createHandler({
  get: createListGet({ name, translateFn: translateReservation }),
});
