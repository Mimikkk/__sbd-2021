import { HeaderGroup } from 'react-table';
import React from 'react';
import {listHeader as listHeaderStyle} from './ListHeader.module.scss'
export interface ListHeaderProps<T extends object> {
  headerGroups: HeaderGroup<T>[];
}

export const ListHeader = <T extends object>({ headerGroups }: ListHeaderProps<T>) => {
  return (
    <thead className={listHeaderStyle}>
    {headerGroups.map(headerGroup => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map(column => (
          <th {...column.getHeaderProps()}>
            {column.render('Header')}
          </th>
        ))}
      </tr>
    ))}
    </thead>);
};