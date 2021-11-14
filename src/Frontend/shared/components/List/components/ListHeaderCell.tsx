import { result } from 'lodash';
import { HeaderGroup } from 'react-table';

export interface ListHeaderGroupProps<T extends object> {
  header: HeaderGroup<T>;
}

export const isHeaderDraggable = <T extends object>(header: HeaderGroup<T>) =>
  'onDragOver' in header ||
  'onDragEnter' in header ||
  'onDragStart' in header ||
  'onDragEnd' in header;

export const ListHeaderCell = <T extends object>({
  header,
}: ListHeaderGroupProps<T>) => {
  const { render, getHeaderProps } = header;
  console.log(header);
  return (
    <th
      {...getHeaderProps()}
      onClick={() => result(header, 'onClick')}
      onDragOver={() => result(header, 'onDragOver')}
      onDragEnter={() => result(header, 'onDragEnter')}
      onDragStart={() => result(header, 'onDragStart')}
      onDragEnd={() => result(header, 'onDragEnd')}
      draggable={isHeaderDraggable(header)}
    >
      {render('Header')}
    </th>
  );
};
