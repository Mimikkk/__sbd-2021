import { CellProps } from "react-table";
import { Scheduler } from "@models";
import { Reservation } from "./Reservation";
import { isEqual } from "date-fns";

export const CourtCell = (cell: CellProps<Scheduler.Row, boolean[]>) => {
  const reservation = cell.row.original.selected[cell.column.id as any];

  if (!reservation || !isEqual(reservation.start, cell.row.original.time))
    return null;

  return <Reservation reservation={reservation} />;
};
