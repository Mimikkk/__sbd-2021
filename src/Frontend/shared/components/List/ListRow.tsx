import React from 'react';
import { Row } from 'react-table';
import { ListRow as ListRowStyle } from 'shared/components/List/List.module.scss';

export interface ListRowProps<T extends object> {
  // @ts-ignore
  row: Row<T>;
}

export const ListRow = <T extends object>({ row }: ListRowProps<T>) => {
  // @ts-ignore
  return (
    <tr {...row.getRowProps()} className={ListRowStyle}>
      {row.cells.map((cell) => {
        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
      })}
    </tr>
  );
};
