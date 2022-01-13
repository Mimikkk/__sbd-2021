import { constant, each, keyBy, map, partial, times } from "lodash";
import { Court, CourtReservation, Scheduler } from "@models";
import { createCourtDates } from "./utils";
import { isWithinInterval } from "date-fns";

const createSchedulerRow = (
  courts: Court.Entity[],
  reservations: CourtReservation.Entity[],
  time: Date
): Scheduler.Row => {
  const courtById = keyBy(courts, "id");
  const row: Scheduler.Row = {
    selected: times(courts.length, constant(null)),
    time,
  };

  const assignTime = (reservation: CourtReservation.Entity) => {
    const { start, end, courtId } = reservation;
    if (isWithinInterval(time, { start, end })) {
      row.selected[courts.indexOf(courtById[courtId])] = reservation;
    }
  };
  each(reservations, assignTime);

  return row;
};

export const createRows = (
  courts: Court.Entity[],
  reservations: CourtReservation.Entity[],
  time: Date
): Scheduler.Row[] =>
  map(
    createCourtDates(time),
    partial(createSchedulerRow, courts, reservations)
  );
