import { CellProps } from 'react-table';
import { format } from 'date-fns';

export const HourCell = <T extends object>({ value }: CellProps<T, Date>) =>
  format(value, 'HH:mm');
