import { useTable, usePagination, Column } from 'react-table';
import { HTMLAttributes } from 'react';
import { List as ListStyle } from 'styles/List.module.scss';
import { IconButton, Grid } from '@mui/material';
import { ListBody, ListHeader } from './components';
import { cx } from 'shared/utils';

export interface ListProps<T extends object>
  extends HTMLAttributes<HTMLTableElement> {
  columns: Column<T>[];
  items: T[];
  pagination?: boolean;
}

export const List = <T extends object>({
  columns,
  items,
  pagination = false,
  className,
  ...props
}: ListProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
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
        <table
          {...getTableProps()}
          className={cx(ListStyle, className)}
          {...props}
        >
          <ListHeader groups={headerGroups} />
          <ListBody
            rows={pagination ? page : rows}
            prepareRow={prepareRow}
            getTableBodyProps={getTableBodyProps}
          />
        </table>
      </Grid>
      {pagination ? (
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
              Page
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
      ) : null}
    </Grid>
  );
};
