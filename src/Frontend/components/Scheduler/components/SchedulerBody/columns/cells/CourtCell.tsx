import { CellProps } from 'react-table';
import { Scheduler } from 'shared/models';

export const CourtCell =
  (index: number) =>
  ({ value }: CellProps<Scheduler.Row, boolean[]>) => {
    return (
      <span style={{ background: 'black' }}>
        {value[index] ? 'Hai' : 'Ney'}
      </span>
    );
  };
