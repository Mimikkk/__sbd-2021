import { useTable, usePagination, Column } from 'react-table';
import React from 'react';
import { ListHeader, ListBody, ListPagination } from './components';
import { List as ListStyle } from 'styles/List.module.scss';
import { IconButton, Grid } from '@mui/material';

export interface Props<T extends object> {
  columns: Column[];
  items: T[];
}

export const List = <T extends object>({ columns, items }: Props<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: items,
      initialState: { pageIndex: 0 },
    },
    usePagination,
  );
  return (
    <Grid
      container
      spacing={2}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Grid item>
        <table {...getTableProps()} className={ListStyle}>
          <ListHeader groups={headerGroups} />
          <ListBody
            rows={page}
            prepareRow={prepareRow}
            getTableBodyProps={getTableBodyProps}
          />
        </table>
      </Grid>
      <Grid item>
        <ListPagination
          gotoPage={gotoPage}
          canPreviousPage={canPreviousPage}
          previousPage={previousPage}
          pageOptions={pageOptions}
          canNextPage={canNextPage}
          nextPage={nextPage}
          pageIndex={pageIndex}
          pageCount={pageCount}
        />
      </Grid>
    </Grid>
  );
};
