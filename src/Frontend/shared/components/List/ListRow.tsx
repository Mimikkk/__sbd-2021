import React from 'react';
import { Row } from 'react-table';

export interface ListRowProps<T extends object> {
  row: Row<T>;
}

export const ListRow = <T extends object>({ row }: ListRowProps<T>) => {
  return (
    <tr {...row.getRowProps()}
        style={{
          borderBottom: 'solid 1px rgba(227, 229, 229, 1)',
          background: 'white',
          color: 'black',
        }}> {row.cells.map(cell => {
      return (
        <td {...cell.getCellProps()}
        style={{padding: '5px'}}>
          {cell.render('Cell')}
        </td>
      );
    })}
    </tr>
  );

};