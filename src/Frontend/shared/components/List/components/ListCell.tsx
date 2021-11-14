import { Cell } from 'react-table';
import { click } from 'shared/utils';

export interface ListCellProps<T extends object, V = any> {
  cell: Cell<T, V>;
}

export const ListCell = <T extends object, V = any>({
  cell,
}: ListCellProps<T, V>) => (
  <td {...cell.getCellProps()} onClick={click(cell)}>
    {cell.render('Cell')}
  </td>
);
