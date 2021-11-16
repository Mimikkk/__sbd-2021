import { HeaderGroup } from 'react-table';
import { isDraggable, runEvents } from './utils';

export interface ListHeaderGroupProps<T extends object> {
  header: HeaderGroup<T>;
}

export const ListHeaderCell = <T extends object>({
  header,
}: ListHeaderGroupProps<T>) => {
  const { render, getHeaderProps } = header;

  return (
    <th
      {...getHeaderProps()}
      {...runEvents(
        header,
        'onClick',
        'onDragStart',
        'onDragEnd',
        'onDragOver',
        'onDragEnter',
      )}
      draggable={isDraggable(header)}
    >
      {render('Header')}
    </th>
  );
};
