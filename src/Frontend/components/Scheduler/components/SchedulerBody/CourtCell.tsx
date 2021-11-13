import { CellProps } from 'react-table';
import { Scheduler } from 'shared/models';
import { schedulerBody__cell } from 'styles/Scheduler.module.scss';

export const CourtCell =
  (index: number) =>
  ({ value }: CellProps<Scheduler.Row, boolean[]>) =>
    <span className={schedulerBody__cell}>{value[index] ? 'Hai' : 'Ney'}</span>;
