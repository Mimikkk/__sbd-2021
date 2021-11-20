import { CellProps } from "react-table";
import { Scheduler } from "@models";
import { Reservation } from "../columns";

export const CourtCell =
  (index: number, reservations: Scheduler.ReservationGroups) =>
  (cell: CellProps<Scheduler.Row, boolean[]>) => {
    const reservation = reservations[index]?.[Number(cell.row.id)] || null;

    return reservation && <Reservation {...reservation} />;
  };
