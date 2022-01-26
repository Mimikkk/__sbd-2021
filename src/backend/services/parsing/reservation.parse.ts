import { Reservation } from "@models";
import { ListResponse } from "$/services/types";

export const parseReservations = <T extends Reservation.Model>({
  items,
  ...meta
}: ListResponse<T>): ListResponse<T> => ({
  items: items.map(parseReservation),
  ...meta,
});

export const parseReservation = <T extends Reservation.Model>(item: T): T => ({
  ...item,
  start: new Date(item.start),
  end: item.end && new Date(item.end),
});
