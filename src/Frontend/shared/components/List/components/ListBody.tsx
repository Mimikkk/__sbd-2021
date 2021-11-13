import React from 'react';
import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table';
import { ListRow, ListRowProps } from './ListRow';
import { useFactory } from 'shared/hooks';
import { elements } from 'shared/utils';
import { each } from 'lodash';

export interface ListBodyProps<T extends object> {
  rows: Row<T>[];
  prepareRow: (row: Row<T>) => void;
  getTableBodyProps: (propGetter?: TableBodyPropGetter<T>) => TableBodyProps;
}

export const ListBody = <T extends object>({
  rows,
  prepareRow,
  getTableBodyProps,
}: ListBodyProps<T>) => {
  const [Rows] = useFactory<ListRowProps<T>>(ListRow);

  return (
    <tbody {...getTableBodyProps()}>
      <Rows items={elements(each(rows, prepareRow), 'row')} />
    </tbody>
  );
};
