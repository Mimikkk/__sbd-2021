import { map, partial, range, zip } from 'lodash';
import { Court, Scheduler } from 'shared/models';
import { HourCell } from 'shared/components';
import { toCssString } from 'shared/utils/dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { removeDragImage } from 'shared/utils/dom';
import {
  ReservationDrag,
  reservationDragContainer,
  schedulerDragContainer,
} from 'components/Scheduler/components/SchedulerBody/components';
import { CellProps } from 'react-table';
import { VFC } from 'react';
import { Paper } from '@mui/material';
import { ReservationGroups } from 'components/Scheduler/components/SchedulerBody/reducer';

export const createSchedulerTimeColumn = (): Scheduler.Column => ({
  accessor: 'time',
  Header: 'Czas',
  Cell: HourCell,
  width: 40,
});

export interface ReservationProps {
  start: number;
  end: number;
}
export const Reservation: VFC<ReservationProps> = ({ start, end }) => (
  <Paper
    style={{
      position: 'absolute',
      width: `${182.44 - 30}px`,
      height: `${(end - start + 1) * 20.98}px`,
      borderRadius: '4px',
      background: 'rgb(149,167,227)',
      cursor: 'pointer',
    }}
    elevation={4}
    onClick={() => {
      console.log(`click at ${start} ${end}`);
    }}
  >
    Rezerwacja {start} {end}
  </Paper>
);

export const CourtCell =
  (index: number, reservations: ReservationGroups) =>
  (cell: CellProps<Scheduler.Row, boolean[]>) => {
    return cell.value[index] &&
      reservations[index] &&
      !cell.rows[Number(cell.row.id) - 1]?.original.selected[index] ? (
      <Reservation
        start={reservations[index][cell.row.id].start}
        end={reservations[index][cell.row.id].end}
      />
    ) : null;
  };

export const createSchedulerCourtColumn = (
  reservations: ReservationGroups,
  index: number,
): Scheduler.Column => ({
  accessor: `selected`,
  Header: `Kort ${index + 1}`,
  id: `${index}`,
  Cell: CourtCell(index, reservations),

  onCellDragStart: (props) => {
    if (!props.cell.row.original.selected[props.cell.column.id]) {
      props.ref.current.start = props.cell;
      props.ref.current.selected = props.event.target as HTMLElement;
      let upper = Number(props.cell.row.id);
      let lower = Number(props.cell.row.id);
      console.log(upper);

      while (upper >= 0) {
        if (props.rows[--upper]?.original.selected[props.cell.column.id]) break;
      }
      while (lower <= 30) {
        if (props.rows[++lower]?.original.selected[props.cell.column.id]) break;
      }

      console.log(upper, lower);

      props.ref.current.nearest = {
        upper,
        lower,
      };

      removeDragImage(props.event);

      render(<ReservationDrag />, schedulerDragContainer());
    } else {
      console.log('stop');
      props.event.stopPropagation();
      props.event.preventDefault();
    }
  },

  onCellDragEnter: (props) => {
    props.ref.current.current = props.cell;
    console.log(props.cell.row.id);
    const reservation = reservationDragContainer();

    if (
      reservation &&
      props.ref.current.current.row.id > props.ref.current.nearest.upper &&
      props.ref.current.current.row.id < props.ref.current.nearest.lower &&
      !props.rows[props.ref.current.current.row.index]?.original.selected[
        props.ref.current.start.column.id
      ]
    ) {
      const value =
        props.ref.current.current.row.index -
        props.ref.current.start!.row.index;
      const shouldOffset = value < 0;
      props.rows[props.ref.current.current.row.index]?.original.selected;

      const height =
        Math.abs(
          props.ref.current.current.row.index -
            props.ref.current.start!.row.index +
            (shouldOffset ? -1 : 1),
        ) * (props.event.target as HTMLElement).clientHeight;
      const { x, y } = props.ref.current.selected!.getBoundingClientRect();
      //@ts-ignore
      const { y: y2 } = props.event.target!.getBoundingClientRect();
      reservation.setAttribute(
        'style',
        toCssString({
          height,
          left: x,
          top: y,
          width: (props.event.target as HTMLElement).clientWidth,
        }),
      );
      // console.log((y2 - y) / value);
      Object.assign(reservation.style, {
        pointerEvents: 'none',
        position: 'fixed',
        left: `${x}px`,
        top: `${y + (shouldOffset ? 20.98 * value : 0)}px`,
        width: '100px',
        height: `${Math.abs(y2 - y) + 20}px`,
        borderRadius: '4px',
        background: 'rgb(189,167,227)',
      });

      const { clientX, clientY } = props.event;
      reservation.innerText = `${clientX} ${clientY}\nCurrently Editing`;
    }
  },

  onCellDragEnd: (props) => {
    props.ref.current = Scheduler.initialRef;

    console.log(zip(...map(props.rows, (r) => r.original.selected)));

    unmountComponentAtNode(schedulerDragContainer());
  },
});

export const createColumns = (
  { length }: Court.Entity[],
  reservations: ReservationGroups,
): Scheduler.Column[] => [
  createSchedulerTimeColumn(),
  ...map(range(length), partial(createSchedulerCourtColumn, reservations)),
];
