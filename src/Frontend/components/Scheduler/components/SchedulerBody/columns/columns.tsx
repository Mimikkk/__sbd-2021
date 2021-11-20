import { map, partial, range, sortBy } from 'lodash';
import { Court, Scheduler } from 'shared/models';
import { HourCell } from 'shared/components';
import { toCssString } from 'shared/utils/dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { removeDragImage } from 'shared/utils/dom';
import {
  ReservationDrag,
  reservationDragContainer,
  schedulerDragContainer,
} from '../components';
import { VFC } from 'react';
import { Paper } from '@mui/material';
import { CourtCell } from './cells';
import { Grid } from '@mui/material';

export const Reservation: VFC<Scheduler.Reservation> = (reservation) => {
  const { start, end } = reservation;

  return (
    <Grid container paddingLeft={2}>
      <Paper
        style={{
          position: 'absolute',
          minWidth: '100px',
          width: `12%`,
          height: `${(end - start + 1) * 20.98}px`,
          borderRadius: '4px',
          background: 'rgb(149,167,227)',
          cursor: 'pointer',
          justifyContent: 'center',
          padding: '8px',
        }}
        elevation={4}
        onClick={() => Scheduler.initialRef.remove?.(reservation)}
      >
        Rez. {start} {end}
      </Paper>
    </Grid>
  );
};

export const createSchedulerTimeColumn = (): Scheduler.Column => ({
  accessor: 'time',
  Header: 'Czas',
  Cell: HourCell,
  width: 40,
});

export const createSchedulerCourtColumn = (
  reservations: Scheduler.ReservationGroups,
  index: number,
): Scheduler.Column => ({
  accessor: `selected`,
  Header: `Kort ${index + 1}`,
  id: `${index}`,
  Cell: CourtCell(index, reservations),

  onCellDragStart: (props) => {
    if (!props.cell.row.original.selected[Number(props.cell.column.id)]) {
      props.ref.current.start = props.cell;
      props.ref.current.selected = props.event.target as HTMLElement;
      let upper = Number(props.cell.row.id);
      let lower = Number(props.cell.row.id);
      console.log(upper);

      while (upper >= 0) {
        if (
          props.rows[--upper]?.original.selected[Number(props.cell.column.id)]
        )
          break;
      }
      while (lower <= 30) {
        if (
          props.rows[++lower]?.original.selected[Number(props.cell.column.id)]
        )
          break;
      }

      console.log(upper, lower);

      props.ref.current.nearest = {
        upper,
        lower,
      };

      removeDragImage(props.event);

      render(<ReservationDrag />, schedulerDragContainer());
    } else {
      props.event.stopPropagation();
      props.event.preventDefault();
    }
  },

  onCellDragEnter: (props) => {
    const reservation = reservationDragContainer();

    if (
      reservation &&
      Number(props.cell.row.id) > props.ref.current.nearest.upper &&
      Number(props.cell.row.id) < props.ref.current.nearest.lower &&
      !props.rows[props.cell.row.index]?.original.selected[
        Number(props.ref.current.start!.column.id)
      ]
    ) {
      props.ref.current.current = props.cell;

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

      const { y: y2 } = (
        props.event.target as HTMLElement
      ).getBoundingClientRect();
      reservation.setAttribute(
        'style',
        toCssString({
          height,
          left: x,
          top: y,
          width: (props.event.target as HTMLElement).clientWidth,
        }),
      );

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
      reservation.innerText = `${clientX} ${clientY}`;
    }
  },

  onCellDragEnd: (props) => {
    props.ref.current = Scheduler.initialRef;

    unmountComponentAtNode(schedulerDragContainer());

    if (props.ref.current.current) {
      const [start, end] = sortBy([
        Number(props.cell.row.id),
        Number(props.ref.current.current!.row.id),
      ]);
      const court = Number(props.cell.column.id);

      props.ref.current.add!({ start, end, court });
    }
  },
});

export const createColumns = (
  { length }: Court.Entity[],
  reservations: Scheduler.ReservationGroups,
): Scheduler.Column[] => [
  createSchedulerTimeColumn(),
  ...map(range(length), partial(createSchedulerCourtColumn, reservations)),
];
