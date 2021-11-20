import { assign, map, partial, range, sortBy } from "lodash";
import { Court, Scheduler } from "@models";
import { HourCell } from "shared/components";
import { toCssString } from "shared/utils/dom";
import { render, unmountComponentAtNode } from "react-dom";
import { removeDragImage } from "shared/utils/dom";
import {
  ReservationDrag,
  reservationDragContainer,
  schedulerDragContainer,
} from "../components";
import { VFC } from "react";
import { Paper } from "@mui/material";
import { CourtCell } from "./cells";
import { Grid } from "@mui/material";
import { findNearestBounds, isWithinDraggingBounds } from "./utils";

export const Reservation: VFC<Scheduler.Reservation> = (reservation) => {
  const { start, end } = reservation;

  return (
    <Grid container paddingLeft={2}>
      <Paper
        style={{
          position: "absolute",
          minWidth: "100px",
          width: `12%`,
          height: `${(end - start + 1) * 20.98}px`,
          borderRadius: "4px",
          background: "rgb(149,167,227)",
          cursor: "pointer",
          justifyContent: "center",
          padding: "8px",
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
  accessor: "time",
  Header: "Czas",
  Cell: HourCell,
  width: 40,
});

export const interruptDrag = (event: DragEvent) => {
  event.stopPropagation();
  event.preventDefault();
};

export const createSchedulerCourtColumn = (
  reservations: Scheduler.ReservationGroups,
  index: number
): Scheduler.Column => ({
  accessor: `selected`,
  Header: `Kort ${index + 1}`,
  id: `${index}`,
  Cell: CourtCell(index, reservations),

  onCellDragStart: (props) => {
    const column = Number(props.cell.column.id);
    if (props.cell.row.original.selected[column])
      return interruptDrag(props.event);

    const context = props.ref.current;
    assign(context, {
      start: props.cell,
      selected: props.event.target as HTMLElement,
      nearest: findNearestBounds(column, props.rows, props.cell),
    });
    removeDragImage(props.event);

    render(<ReservationDrag />, schedulerDragContainer());
  },

  onCellDragEnter: (props) => {
    const reservation = reservationDragContainer();
    if (!reservation || !isWithinDraggingBounds(props)) return;
    props.ref.current.current = props.cell;

    const value = props.cell.row.index - props.ref.current.start!.row.index;
    const shouldOffset = value < 0;

    props.rows[props.cell.row.index]?.original.selected;
    const targetElement = props.event.target as HTMLElement;

    const { width, height, y: y2 } = targetElement.getBoundingClientRect();
    const { x, y } = props.ref.current.selected!.getBoundingClientRect();

    reservation.setAttribute(
      "style",
      toCssString({
        height: Math.abs(value + (shouldOffset ? -1 : 1)) * height,
        left: x,
        top: y,
        width,
      })
    );

    Object.assign(reservation.style, {
      pointerEvents: "none",
      position: "fixed",
      left: `${x}px`,
      top: `${y + (shouldOffset ? 20.98 * value : 0)}px`,
      width: "100px",
      height: `${Math.abs(y2 - y) + 20}px`,
      borderRadius: "4px",
      background: "rgb(189,167,227)",
    });

    const { clientX, clientY } = props.event;
    reservation.innerText = `${clientX} ${clientY}`;
  },

  onCellDragEnd: (props) => {
    props.ref.current = Scheduler.initialRef;

    unmountComponentAtNode(schedulerDragContainer());

    const [start, end] = sortBy([
      Number(props.cell.row.id),
      Number(props.ref.current.current!.row.id),
    ]);
    const court = Number(props.cell.column.id);

    props.ref.current.add!({ start, end, court });
  },
});

export const createColumns = (
  { length }: Court.Entity[],
  reservations: Scheduler.ReservationGroups
): Scheduler.Column[] => [
  createSchedulerTimeColumn(),
  ...map(range(length), partial(createSchedulerCourtColumn, reservations)),
];
