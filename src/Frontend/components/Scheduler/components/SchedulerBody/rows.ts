import faker from 'faker';
import { constant, map, partial, times } from 'lodash';
import { Scheduler } from 'shared/models';
import { courtDates } from './values';

export const createSchedulerRow = (n: number, time: Date): Scheduler.Row => ({
  time,
  selected: times(n, () => false),
});

export const createSchedulerRows = (n: number, time: Date): Scheduler.Row[] =>
  map(courtDates(time), partial(createSchedulerRow, n));
