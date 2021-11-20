import { HeaderGroup } from 'react-table';
import { useFactory } from 'shared/hooks';
import { elements } from 'shared/utils';
import { ListHeaderCell, ListHeaderGroupProps } from './ListHeaderCell';

export interface ListHeaderGroupRowProps<T extends object> {
  group: HeaderGroup<T>;
}

export const ListHeaderRow = <T extends object>({
  group: { getHeaderGroupProps, headers },
}: ListHeaderGroupRowProps<T>) => {
  const [Groups] = useFactory<ListHeaderGroupProps<T>>(ListHeaderCell);

  return (
    <tr {...getHeaderGroupProps()}>
      <Groups items={elements(headers, 'header')} />
    </tr>
  );
};
