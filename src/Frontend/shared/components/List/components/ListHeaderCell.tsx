import { HeaderGroup } from 'react-table';

export interface ListHeaderGroupProps<T extends object> {
  header: HeaderGroup<T>;
}

export const ListHeaderCell = <T extends object>({
  header: { render, getHeaderProps },
}: ListHeaderGroupProps<T>) => (
  <th {...getHeaderProps()}>{render('Header')}</th>
);
