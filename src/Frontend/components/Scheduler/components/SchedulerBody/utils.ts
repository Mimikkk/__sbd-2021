import { constant, map, partial, range, times } from 'lodash';
import { Scheduler } from 'shared/models';
import { HourCell } from 'shared/components/List/components';
import { Column } from 'shared/components/List';
import { CourtCell } from './CourtCell';
import { courtDates } from './values';

export const createSchedulerRow = (n: number, time: Date): Scheduler.Row => ({
  time,
  selected: times(n, constant(false)),
});

export const createSchedulerRows = (n: number, time: Date): Scheduler.Row[] =>
  map(courtDates(time), partial(createSchedulerRow, n));

export const createSchedulerTimeColumn = (): Column<Scheduler.Row> => ({
  accessor: 'time',
  Header: 'Czas',
  Cell: HourCell,
  onHeaderClick: (props) => {
    console.log({ header: props });
  },
  onCellClick: (props) => {
    console.log({ cell: props });
  },
});

export const createSchedulerCourtColumn = (
  index: number,
): Column<Scheduler.Row> => ({
  accessor: `selected`,
  Header: `Kort ${index + 1}`,
  id: `${index}`,
  Cell: CourtCell(index),
});

export const createSchedulerColumns = (n: number): Column<Scheduler.Row>[] => {
  return [
    createSchedulerTimeColumn(),
    ...map(range(n), createSchedulerCourtColumn),
  ];
};
