import { Reservation } from "dedicated/components/Scheduler/components/Body/Contents/components";
import { CellProps } from "react-table";
import { Scheduler } from "@models";
import { isEqual } from "date-fns";

export const CourtCell = (cell: CellProps<Scheduler.Row, boolean[]>) => {
  const reservation = cell.row.original.reserved[cell.column.id as any];

  if (!reservation || !isEqual(reservation.start, cell.row.original.time))
    return null;

  return <Reservation reservation={reservation} />;
};
