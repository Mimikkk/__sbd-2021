import { CellProps } from "react-table";
import { Scheduler } from "@models";
import { Reservation } from "./Reservation";

export const CourtCell = (cell: CellProps<Scheduler.Row, boolean[]>) => {
  const reservation = cell.row.original.selected[cell.column.id as any];
  if (
    !reservation ||
    cell.rows[Number(cell.row.id) - 1].original.selected[cell.column.id as any]
  )
    return null;
  return <Reservation reservation={reservation} />;
};
