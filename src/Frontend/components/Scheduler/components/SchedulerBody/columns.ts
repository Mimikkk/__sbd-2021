import { map, range } from 'lodash';
import { Scheduler } from 'shared/models';
import { HourCell } from 'shared/components/List/components';
import { Column } from 'shared/components/List';
import { CourtCell } from './CourtCell';

export const createSchedulerTimeColumn = (): Scheduler.Column => ({
  accessor: 'time',
  Header: 'Czas',
  Cell: HourCell,
});

export const createSchedulerCourtColumn = (
  index: number,
): Scheduler.Column => ({
  accessor: `selected`,
  Header: `Kort ${index + 1}`,
  id: `${index}`,
  Cell: CourtCell(index),

  onCellDragStart: async (props) => {
    console.log('start');
    props.setState({
      current: null,
      start: null,
    });
  },

  onCellDragEnd: (props) => {
    console.log('end');
  },
});

export const createSchedulerColumns = (n: number): Scheduler.Column[] => {
  return [
    createSchedulerTimeColumn(),
    ...map(range(n), createSchedulerCourtColumn),
  ];
};
