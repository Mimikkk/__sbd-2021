import { CellProps } from 'react-table';
import { Scheduler } from 'shared/models';

export const CourtCell =
  (index: number) =>
  ({ value }: CellProps<Scheduler.Row, boolean[]>) =>
    <span>{value[index] ? 'Hai' : 'Ney'}</span>;
