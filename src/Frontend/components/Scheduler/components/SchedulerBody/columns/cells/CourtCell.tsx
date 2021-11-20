import { CellProps } from 'react-table';
import { Scheduler } from 'shared/models';
import { Reservation } from '../columns';

export const CourtCell =
  (index: number, reservations: Scheduler.ReservationGroups) =>
  (cell: CellProps<Scheduler.Row, boolean[]>) =>
    cell.value[index] &&
    reservations[index] &&
    !cell.rows[Number(cell.row.id) - 1]?.original.selected[index] && (
      <Reservation {...reservations[index][Number(cell.row.id)]} />
    );
