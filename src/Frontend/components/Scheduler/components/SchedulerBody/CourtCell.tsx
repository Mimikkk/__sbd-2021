import { CellProps } from 'react-table';
import { Scheduler } from 'shared/models';

export const CourtCell =
  (index: number) =>
  ({ value }: CellProps<Scheduler.Row, boolean[]>) =>
    <p>{value[index] ? 'Hai' : 'Ney'}</p>;
