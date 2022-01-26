import { ApiFn, createHandler } from "$/api";
import { createListPost } from "$/api/list.utils";
import { createCourtReservation, translateCourtReservation } from "$sql/orm";
import { selectWith } from "$sql";
import { StatusCode } from "@internal/enums";

export const get: ApiFn = async ({ response }) => {
  const items = (await selectWith(translateCourtReservation)`
    select *,
           not exists(select * from transaction where reservation_id = cr.id) is_pending
    from ${name} cr;
  `) as [];

  return await response
    .status(StatusCode.Ok)
    .json({ items, total: items.length });
};

const name = "court_reservation";
export default createHandler({
  get,
  post: createListPost({ name, createFn: createCourtReservation }),
});
