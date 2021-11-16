import { result } from 'lodash';
import { Cell } from 'react-table';

export interface ListCellProps<T extends object, V = any> {
  cell: Cell<T, V>;
}

export const isCellDraggable = <T extends object, V>(cell: Cell<T, V>) =>
  'onDragOver' in cell ||
  'onDragEnter' in cell ||
  'onDragStart' in cell ||
  'onDragEnd' in cell;

export const ListCell = <T extends object, V = any>({
  cell,
}: ListCellProps<T, V>) => (
  <td
    {...cell.getCellProps()}
    onClick={() => result(cell, 'onClick')}
    onDragOver={() => result(cell, 'onDragOver')}
    onDragEnter={() => result(cell, 'onDragEnter')}
    onDragStart={() => result(cell, 'onDragStart')}
    onDragEnd={() => result(cell, 'onDragEnd')}
    draggable={isCellDraggable(cell)}
  >
    {cell.render('Cell')}
  </td>
);
