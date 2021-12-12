import { SqlResponse } from "$sql/types";
import { CourtReservation } from "@models";
import { translateReservation } from "./reservation.orm";

export const translateCourtReservation = (
  raw: SqlResponse
): CourtReservation.Entity => ({
  ...translateReservation(raw),
  courtId: raw.court_id,
});
