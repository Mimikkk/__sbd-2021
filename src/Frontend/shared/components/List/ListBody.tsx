import React from 'react';
import { Row, TableBodyPropGetter, TableBodyProps} from 'react-table';
import { ListRow } from 'shared/components/List/ListRow';

export interface ListBodyProps<T extends object> {
  rows:  Row<T>[];
  prepareRow:  (row: Row<T>) => void;
  getTableBodyProps: (propGetter?: (TableBodyPropGetter<T> | undefined)) => TableBodyProps;
}

export const ListBody = <T extends object>({ rows, prepareRow, getTableBodyProps }: ListBodyProps<T>) => {
  return (
    <tbody {...getTableBodyProps()}>
    {rows.map(row => {prepareRow(row)
      return (
        <ListRow row={row} />
      )
    })}
    </tbody>
  )
}