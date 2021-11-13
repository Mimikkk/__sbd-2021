import { useTable, usePagination, ColumnInstance, Row } from 'react-table';
import React from 'react';
import { ListHeader } from 'shared/components/List/ListHeader';
import { ListBody } from 'shared/components/List/ListBody';
import { List as ListStyle } from 'shared/components/List/List.module.scss';
import { IconButton, Grid } from '@mui/material';

export interface Props<T extends object> {
  columns: ColumnInstance[];
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
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Grid item>
        <table {...getTableProps()} className={ListStyle}>
          <ListHeader headerGroups={headerGroups} />
          <ListBody
            page={page}
            prepareRow={prepareRow}
            getTableBodyProps={getTableBodyProps}
          />
        </table>
      </Grid>
      <Grid item>
        <div className="pagination" style={{ margin: '1em' }}>
          <IconButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {' '}
            {'<<'}
          </IconButton>
          <IconButton
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {'<'}
          </IconButton>

          <span style={{ margin: '1em', color: 'rgba(145, 150, 153, 1)' }}>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>

          <IconButton onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </IconButton>
          <IconButton
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};
