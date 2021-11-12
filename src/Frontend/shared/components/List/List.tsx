import { Column, useTable } from 'react-table';
import React from 'react';
import { ListHeader } from 'shared/components/List/ListHeader';
import { ListBody } from 'shared/components/List/ListBody';
import {List as ListStyle} from 'shared/components/List/List.module.scss'

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
    <table {...getTableProps()} className={ListStyle}>
      <ListHeader headerGroups={headerGroups}/>
      <ListBody rows={rows} prepareRow={prepareRow} getTableBodyProps={getTableBodyProps}/>
    </table>
  )
}