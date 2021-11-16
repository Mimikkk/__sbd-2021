import { map, range } from 'lodash';
import { Scheduler } from 'shared/models';
import { HourCell } from 'shared/components';
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
    props.ref.current.isDragging = true;
    props.ref.current.start = props.cell;
    console.log('start', props.ref.current.isDragging);
  },

  onCellDragEnter: async (props) => {
    if (props.ref.current.start!.column.id === props.cell.column.id) {
      props.ref.current.current = props.cell;
      console.log('enter', props.ref.current.isDragging);
    }
  },

  onCellDragEnd: (props) => {
    props.ref.current = Scheduler.initialRef;
    console.log('end', props.ref.current.isDragging);
  },
});

export const createSchedulerColumns = (n: number): Scheduler.Column[] => {
  return [
    createSchedulerTimeColumn(),
    ...map(range(n), createSchedulerCourtColumn),
  ];
};
