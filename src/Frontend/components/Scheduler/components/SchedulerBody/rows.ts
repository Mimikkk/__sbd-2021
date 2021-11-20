import { keyBy, groupBy, partial, constant, map, times } from 'lodash';
import { mapValues } from 'lodash';
import { Court, Scheduler } from 'shared/models';
import { courtDates } from '../values';
import { ReservationGroups } from './types';

export const groupRows = (rows: Scheduler.Row[]): ReservationGroups =>
  mapValues(groupBy(rows, 'court'), (row) => keyBy(row, 'start'));

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
