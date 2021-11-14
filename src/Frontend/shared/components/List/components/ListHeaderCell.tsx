import { HeaderGroup } from 'react-table';
import { click } from 'shared/utils';

export interface ListHeaderGroupProps<T extends object> {
  header: HeaderGroup<T>;
}

export const ListHeaderCell = <T extends object>({
  header,
}: ListHeaderGroupProps<T>) => {
  const { render, getHeaderProps } = header;

  return (
    <th {...getHeaderProps()} onClick={click(header)}>
      {render('Header')}
    </th>
  );
};
