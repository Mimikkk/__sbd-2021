import { ReservationDrag } from "dedicated/components/Scheduler/components/Body/Contents/components";
import { HourCell } from "shared/components";
import { CourtCell } from "./cells";
import { render } from "react-dom";
import { removeDragImage } from "shared/utils/dom";
import { Court, Scheduler } from "@models";
import { courtReservationService } from "@services";
import { curry } from "lodash";
import { differenceInMinutes, isWithinInterval } from "date-fns";
import { findContainingInterval } from "./utils";

const timeColumn: Scheduler.Column = {
  accessor: "time",
  Header: "Time",
  Cell: HourCell,
  width: 40,
};

const createCourtColumn = (
  refresh: () => void,
  court: Court.Entity,
  index: number
): Scheduler.Column => ({
  Header: `Court - ${court.name}`,
  id: `${index}`,
  Cell: CourtCell,
  onCellDragStart: ({ cell, event, ref, rows }) => {
    if (cell.row.original.reserved[index]) event.preventDefault();
    ref.current = {
      ...ref.current,
      column: index,
      row: cell.row.index,
      start: cell.row.original.time,
      interval: findContainingInterval(index, rows, cell),
    };

    removeDragImage(event);
  },
  onCellDragEnter: ({ ref, cell }) => {
    const { column, start, row, interval } = ref.current;
    if (column !== index) return;
    const { time } = cell.row.original;
    if (row! > cell.row.index) return;
    if (!isWithinInterval(time, interval)) return;

    ref.current.end = time;
    const end = ref.current.end;

    const rowid = Math.min(row!, cell.row.index);
    const container = document.getElementById(`${column}.${rowid}`)!;
    render(<ReservationDrag start={start!} end={end} />, container);
  },
  onCellDragEnd: async ({ ref }) => {
    const { start, end, refresh } = ref.current;

    if (!start || !end || differenceInMinutes(end, start) <= 0) {
      const drag = document.getElementById("reservation-drag-container");
      drag?.remove();
      return;
    }

    await courtReservationService.create({
      end,
      start,
      courtId: court.id,
      teacherId: null,
    });

    const drag = document.getElementById("reservation-drag-container");
    drag?.remove();

    refresh();
  },
});

export const createColumns = (
  courts: Court.Entity[],
  refresh: () => void
): Scheduler.Column[] => [
  timeColumn,
  ...courts.map(curry(createCourtColumn)(refresh)),
];
