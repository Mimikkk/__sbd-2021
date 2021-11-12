import { HeaderGroup } from 'react-table';
import React from 'react';

export interface ListHeaderProps<T extends object> {
  headerGroups: HeaderGroup<T>[];
}

export const ListHeader = <T extends object>({ headerGroups }: ListHeaderProps<T>) => {
  return (
    <thead>
    {headerGroups.map(headerGroup => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map(column => (
          <th {...column.getHeaderProps()} style={{
            borderBottom: 'solid 2px rgba(227, 229, 229, 1)',
          }}>
            {column.render('Header')}
          </th>

        ))}
      </tr>
    ))}
    </thead>);
};