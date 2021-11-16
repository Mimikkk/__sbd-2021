import { CellProps } from 'react-table';

export const BoolCell = <T extends object>({ value }: CellProps<T>) =>
  value ? 'Yes' : 'No';
