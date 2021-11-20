import { useTable, usePagination, useFlexLayout } from 'react-table';
import { HTMLAttributes, useRef } from 'react';
import { Grid } from '@mui/material';
import { ListBody, ListHeader, ListPagination } from './components';
import { cx } from 'shared/utils';
import { style } from 'styles';
import { compact, each } from 'lodash';
import { Column } from './types';
import { prepareCells, prepareHeaders } from './utils';

export interface ListProps<T extends object, R = undefined>
  extends HTMLAttributes<HTMLTableElement> {
  columns: Column<T, R>[];
  items: T[];
  pagination?: boolean;
  initialRef?: R;
}

export const List = <T extends object, R = undefined>({
  columns,
  items,
  pagination = false,
  className,
  initialRef,
  ...props
}: ListProps<T, R>) => {
  const ref = useRef<R>();
  if (!ref.current) ref.current = initialRef;

  const {
    columns: cols,
    getTableProps,
    getTableBodyProps,
    headerGroups: groups,
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
    ...compact([pagination && usePagination, useFlexLayout]),
  );

  prepareCells(each(rows, prepareRow), cols, ref);
  prepareHeaders(groups, rows, cols, ref);

  return (
    <Grid container>
      <Grid item style={{ width: '100%' }}>
        <table
          {...getTableProps()}
          className={cx(style('list'), className)}
          {...props}
        >
          <ListHeader groups={groups} />
          <ListBody rows={pagination ? page : rows} {...getTableBodyProps()} />
        </table>
      </Grid>
      {pagination ? (
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
      ) : null}
    </Grid>
  );
};
