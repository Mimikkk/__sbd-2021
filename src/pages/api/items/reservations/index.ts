import { createHandler } from "$/api";
import { createListGet, createListPost } from "$/api/list.utils";
import { createItemReservation, translateItemReservation } from "$sql/orm";

const name = "item_reservation";
export default createHandler({
  get: createListGet({ name, translateFn: translateItemReservation }),
  post: createListPost({ name, createFn: createItemReservation }),
});
