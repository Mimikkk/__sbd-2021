import { Scheduler } from "@models";
import { Row } from "react-table";

export const findContainingInterval = (
  column: number,
  rows: Row<Scheduler.Row>[],
  cell: Scheduler.Cell
): Interval => {
  let upper = Number(cell.row.id);
  while (upper > 0 && !rows[--upper]?.original.reserved[column]);

  let lower = Number(cell.row.id);
  while (lower <= 30 && !rows[++lower]?.original.reserved[column]);

  return {
    start: rows[upper]!.original.time,
    end: rows[lower - 1]!.original.time,
  } as const;
};
