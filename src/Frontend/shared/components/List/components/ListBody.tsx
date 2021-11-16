import React from 'react';
import { Row, TableBodyProps } from 'react-table';
import { ListRow, ListRowProps } from './ListRow';
import { useFactory } from 'shared/hooks';
import { elements } from 'shared/utils';

export interface ListBodyProps<T extends object> extends TableBodyProps {
  rows: Row<T>[];
}

export const ListBody = <T extends object>({
  rows,
  ...props
}: ListBodyProps<T>) => {
  const [Rows] = useFactory<ListRowProps<T>>(ListRow);

  return (
    <tbody {...props}>
      <Rows items={elements(rows, 'row')} />
    </tbody>
  );
};
