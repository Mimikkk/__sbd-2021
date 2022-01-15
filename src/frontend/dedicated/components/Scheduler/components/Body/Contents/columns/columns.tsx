import { Court, Scheduler } from "@models";
import { HourCell } from "shared/components";
import { CourtCell } from "./cells";
import { render } from "react-dom";
import { ReservationDrag } from "./cells/Reservation";
import { removeDragImage } from "shared/utils/dom";
import { courtReservationService } from "@services";
import { curry } from "lodash";
import { differenceInMinutes } from "date-fns";

const timeColumn: Scheduler.Column = {
  accessor: "time",
  Header: "Czas",
  Cell: HourCell,
  width: 40,
};

const createCourtColumn = (
  refresh: () => void,
  court: Court.Entity,
  index: number
): Scheduler.Column => ({
  accessor: `selected`,
  Header: `Kort - ${court.name}`,
  id: `${index}`,
  Cell: CourtCell,
  onCellDragStart: ({ cell, event, index, ref }) => {
    if (cell.row.original.selected[index]) event.preventDefault();
    ref.current = {
      ...ref.current,
      column: index,
      row: cell.row.index,
      start: cell.row.original.time,
    };
    removeDragImage(event);
  },
  onCellDragEnter: (event) => {
    const { column, start, row } = event.ref.current;
    if (column !== event.index) return;
    if (row! > event.cell.row.index) return;
    event.ref.current.end = event.cell.row.original.time;
    const end = event.ref.current.end;

    const container = document.getElementById(`${column - 1}.${row}`)!;
    render(<ReservationDrag start={start!} end={end} />, container);
  },
  onCellDragEnd: (event) => {
    const { column, start, end, row, refresh } = event.ref.current;
    const container = document.getElementById(`${column! - 1}.${row}`)!;
    container.removeChild(container.lastChild!);

    if (differenceInMinutes(end!, start!) <= 0) return;

    courtReservationService
      .create({ end: end!, start: start!, courtId: court.id, teacherId: null })
      .then(refresh);
  },
});

export const createColumns = (
  courts: Court.Entity[],
  refresh: () => void
): Scheduler.Column[] => [
  timeColumn,
  ...courts.map(curry(createCourtColumn)(refresh)),
];
