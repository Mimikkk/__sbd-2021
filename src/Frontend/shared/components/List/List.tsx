import {
  useTable,
  usePagination,
  Column,
  Row,
  Cell,
  HeaderGroup,
} from 'react-table';
import { HTMLAttributes } from 'react';
import { IconButton, Grid } from '@mui/material';
import { ListBody, ListHeader } from './components';
import { cx } from 'shared/utils';
import { style } from 'styles';
import { Dictionary, each, extend, keyBy } from 'lodash';

interface CellClickFnProps<T extends object> {
  cell: Cell<T>;
  row: Row<T>;
  rows: Row<T>[];
  columns: Column<T>[];
}

interface HeaderClickFnProps<T extends object> {
  header: HeaderGroup<T>;
  headers: HeaderGroup<T>[];
  rows: Row<T>[];
  columns: Column<T>[];
}

type ClickableColumn<T extends object> = Column<T> & {
  onCellClick?: (props: CellClickFnProps<T>) => void;
  onHeaderClick?: (props: HeaderClickFnProps<T>) => void;
};

export interface ListProps<T extends object>
  extends HTMLAttributes<HTMLTableElement> {
  columns: ClickableColumn<T>[];
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
    columns: cols,
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

  const columnById = keyBy(columns, (column) =>
    'id' in column ? column.id : column.accessor,
  ) as Dictionary<ClickableColumn<T>>;

  each(
    each(each(rows, prepareRow), (row) => {
      each(row.cells, (cell) => {
        const { onCellClick } = columnById[cell.column.id];

        extend(cell, {
          onClick: () => onCellClick?.({ cell, row, rows, columns: cols }),
        });
      });
    }),
  );

  each(
    each(headerGroups, (group) => {
      each(group.headers, (header) => {
        const { onHeaderClick } = columnById[header.id];

        extend(header, {
          onClick: () =>
            onHeaderClick?.({
              header,
              headers: headerGroups,
              rows,
              columns: cols,
            }),
        });
      });
    }),
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
          className={cx(style('list'), className)}
          {...props}
        >
          <ListHeader groups={headerGroups} />
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
