import { Cell } from 'react-table';

export interface ListCellProps<T extends object, V = any> {
  cell: Cell<T, V>;
}

export const ListCell = <T extends object, V = any>({
  cell: { getCellProps, render },
}: ListCellProps<T, V>) => <td {...getCellProps()}>{render('Cell')}</td>;
