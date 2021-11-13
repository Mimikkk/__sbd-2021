import React from 'react';
import { Row } from 'react-table';
import { useFactory } from 'shared/hooks';
import { elements } from 'shared/utils';
import { ListCell, ListCellProps } from './ListCell';
import { ListRow as ListRowStyle } from 'styles/List.module.scss';

export interface ListRowProps<T extends object> {
  row: Row<T>;
}

export const ListRow = <T extends object>({
  row: { getRowProps, cells },
}: ListRowProps<T>) => {
  const [Cells] = useFactory<ListCellProps<T>>(ListCell);

  return (
    <tr {...getRowProps()} className={ListRowStyle}>
      <Cells items={elements(cells, 'cell')} />
    </tr>
  );
};
