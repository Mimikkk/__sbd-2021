import { useTable, usePagination } from 'react-table';
import { HTMLAttributes, useState } from 'react';
import { IconButton, Grid } from '@mui/material';
import { ListBody, ListHeader } from './components';
import { cx } from 'shared/utils';
import { style } from 'styles';
import { compact, each } from 'lodash';
import { Column } from './types';
import { prepareCells, prepareHeaders } from './utils';

export interface ListProps<T extends object, S = undefined>
  extends HTMLAttributes<HTMLTableElement> {
  columns: Column<T, S>[];
  items: T[];
  pagination?: boolean;
  initial?: S;
}

export const List = <T extends object, S = undefined>({
  columns,
  items,
  pagination = false,
  className,
  initial,
  ...props
}: ListProps<T, S>) => {
  const [state, setState] = useState<S>(initial as S);

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
    ...compact([pagination && usePagination]),
  );

  prepareCells(each(rows, prepareRow), cols, state, setState);
  prepareHeaders(groups, rows, cols, state, setState);

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
          className={cx(style('list'), className)}
          {...props}
        >
          <ListHeader groups={groups} />
          <ListBody rows={pagination ? page : rows} {...getTableBodyProps()} />
        </table>
      </Grid>
      {pagination ? (
        <Grid item>
          <div className="pagination" style={{ margin: '1em' }}>
            <IconButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {' '}
              {'<<'}
            </IconButton>
            <IconButton onClick={previousPage} disabled={!canPreviousPage}>
              {'<'}
            </IconButton>

            <span style={{ margin: '1em', color: 'rgba(145, 150, 153, 1)' }}>
              Page
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>

            <IconButton onClick={nextPage} disabled={!canNextPage}>
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
