import { Column, useTable } from 'react-table';
import React from 'react';
import { ListHeader } from 'shared/components/List/ListHeader';
import { ListBody } from 'shared/components/List/ListBody';

export interface Props <T extends object> {
  columns: Column<T>[];
  items: T[]
}

export const List = <T extends object> ({columns, items}: Props<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: items})

  return (
    <table {...getTableProps()} style={{width: '100%', borderCollapse: 'collapse'}}>
      <ListHeader headerGroups={headerGroups}/>
      <ListBody rows={rows} prepareRow={prepareRow} getTableBodyProps={getTableBodyProps}/>
    </table>
  )
}