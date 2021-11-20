import faker from 'faker';
import { constant, map, partial, times } from 'lodash';
import { Court, Scheduler } from 'shared/models';
import { courtDates } from './values';

export const createSchedulerRow = (n: number, time: Date): Scheduler.Row => ({
  selected: times(n, constant(false)),
  time,
});

export const createRows = (
  { length }: Court.Entity[],
  reservations: Scheduler.Reservation[],
): Scheduler.Row[] => {
  const today = new Date();
  const start = map(courtDates(today), partial(createSchedulerRow, length));

  return start;
};
