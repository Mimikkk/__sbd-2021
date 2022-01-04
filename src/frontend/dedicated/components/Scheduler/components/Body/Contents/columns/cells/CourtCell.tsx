import { CellProps } from "react-table";
import { Scheduler } from "@models";

export const CourtCell =
  (index: number) => (cell: CellProps<Scheduler.Row, boolean[]>) => {
    return "reservation";
  };
