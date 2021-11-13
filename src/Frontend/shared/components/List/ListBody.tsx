import React from 'react';
// @ts-ignore
import { Row, TableBodyPropGetter, TableProps } from 'react-table';
import { ListRow } from 'shared/components/List/ListRow';

export interface ListBodyProps<T extends object> {
  page: Row[];
  prepareRow: (row: Row) => void;
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<T> | undefined,
  ) => TableProps;
}

export const ListBody = <T extends object>({
  page,
  prepareRow,
  getTableBodyProps,
}: ListBodyProps<T>) => {
  return (
    <tbody {...getTableBodyProps()}>
      {page.map((row) => {
        prepareRow(row);
        return <ListRow row={row} />;
      })}
    </tbody>
  );
};
