import { constant, map, partial, times } from "lodash";
import { Court, Scheduler } from "@models";
import { createCourtDates } from "./utils";

const createSchedulerRow = (
  { length }: Court.Entity[],
  time: Date
): Scheduler.Row => ({ selected: times(length, constant(false)), time });

export const createRows = (
  courts: Court.Entity[],
  time: Date
): Scheduler.Row[] =>
  map(createCourtDates(time), partial(createSchedulerRow, courts));
