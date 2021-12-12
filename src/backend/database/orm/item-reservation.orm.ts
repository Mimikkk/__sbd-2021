import { SqlResponse } from "$sql/types";
import { ItemReservation } from "@models";
import { translateReservation } from "./reservation.orm";

export const translateItemReservation = (
  raw: SqlResponse
): ItemReservation.Entity => ({
  ...translateReservation(raw),
  itemId: raw.item_id,
  count: raw.count,
});
