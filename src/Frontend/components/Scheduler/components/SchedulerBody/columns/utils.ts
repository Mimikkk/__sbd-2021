import { Scheduler } from 'shared/models';
import { Row } from 'react-table';
import { CellEventProps } from 'shared/components';

export const findNearestBounds = (
  column: number,
  rows: Row<Scheduler.Row>[],
  cell: Scheduler.Cell,
): { lower: number; upper: number } => {
  let upper = Number(cell.row.id);
  let lower = Number(cell.row.id);

  while (upper >= 0 && !rows[--upper]?.original.selected[column]);
  while (lower <= 30 && !rows[++lower]?.original.selected[column]);
  return { lower, upper };
};

export const isWithinDraggingBounds = (
  props: CellEventProps<Scheduler.Row, Scheduler.RowRef>,
) => {
  const { lower, upper } = props.ref.current.nearest;
  const row = Number(props.cell.row.id);
  const startColumn = Number(props.ref.current.start!.column.id);

  return (
    row > upper &&
    row < lower &&
    !props.rows[row]?.original.selected[startColumn]
  );
};
