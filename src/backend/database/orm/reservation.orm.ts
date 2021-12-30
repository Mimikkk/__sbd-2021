import { Reservation } from "@models";
import { footprintTranslation } from "./footprint.orm";
import { createTranslation, SqlMap } from "$sql/orm/utils";

export const reservationTranslation: SqlMap<Reservation.Entity> = {
  ...footprintTranslation,
  start: (value) => new Date(value),
  end: (value) => value && new Date(value),
};
export const translateReservation = createTranslation(reservationTranslation);
