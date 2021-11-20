import { HeaderGroup } from 'react-table';
import { useFactory } from 'shared/hooks';
import { elements } from 'shared/utils';
import { ListHeaderRow, ListHeaderGroupRowProps } from './ListHeaderRow';

export interface ListHeaderProps<T extends object> {
  groups: HeaderGroup<T>[];
}

export const ListHeader = <T extends object>({
  groups,
}: ListHeaderProps<T>) => {
  const [HeaderRows] = useFactory<ListHeaderGroupRowProps<T>>(ListHeaderRow);

  return (
    <thead>
      <HeaderRows items={elements(groups, 'group')} />
    </thead>
  );
};
