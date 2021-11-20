import {
  keyBy,
  groupBy,
  partial,
  constant,
  map,
  times,
  each,
  range,
} from "lodash";
import { mapValues } from "lodash";
import { Court, Scheduler } from "@models";
import { courtDates } from "./values";

export const groupReservations = (
  rows: Scheduler.Reservation[]
): Scheduler.ReservationGroups =>
  mapValues(groupBy(rows, "court"), (row) => keyBy(row, "start"));

export const createSchedulerRow = (
  { length }: Court.Entity[],
  time: Date
): Scheduler.Row => ({
  selected: times(length, constant(false)),
  time,
});

const fillReservation = (
  rows: Scheduler.Row[],
  { start, end, court }: Scheduler.Reservation
) => each(range(start, end + 1), (i) => (rows[i].selected[court] = true));

export const createRows = (
  courts: Court.Entity[],
  reservations: Scheduler.Reservation[]
): Scheduler.Row[] =>
  reservations.reduce(
    (rows, reservation) => (fillReservation(rows, reservation), rows),
    map(courtDates(new Date()), partial(createSchedulerRow, courts))
  );
