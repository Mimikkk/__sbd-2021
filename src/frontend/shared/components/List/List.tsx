import { useTable, usePagination, useFlexLayout } from "react-table";
import { HTMLAttributes, useRef } from "react";
import {
  ListBody,
  ListHeader,
  ListPagination,
  ListLoading,
  ListEmpty,
} from "./components";
import { cx } from "shared/utils";
import { style } from "styles";
import { compact, each } from "lodash";
import { Column } from "./types";
import { prepareCells, prepareHeaders } from "./utils";

export interface ListProps<T extends object, R = undefined>
  extends HTMLAttributes<HTMLTableElement> {
  columns: Column<T, R>[];
  items: T[];
  pagination?: boolean;
  cellRef?: R;
  loading?: boolean;
}

export const List = <T extends object, R = undefined>({
  columns,
  items,
  pagination = false,
  className,
  loading,
  cellRef,
  ...props
}: ListProps<T, R>) => {
  const reference = useRef<R>();
  if (!reference.current) reference.current = cellRef;

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
    ...compact([pagination && usePagination, useFlexLayout])
  );

  prepareCells(each(rows, prepareRow), cols, reference);
  prepareHeaders(groups, rows, cols, reference);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "90%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "space-between",
      }}
    >
      <div style={{ width: "inherit", display: "flex" }}>
        <table
          {...getTableProps()}
          className={cx(style("list"), className)}
          {...props}
        >
          <ListHeader groups={groups} />
          {loading ? (
            <ListLoading />
          ) : rows.length > 0 ? (
            <ListBody
              rows={pagination ? page : rows}
              {...getTableBodyProps()}
            />
          ) : (
            <ListEmpty />
          )}
        </table>
      </div>
      {pagination ? (
        <div>
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
        </div>
      ) : null}
    </div>
  );
};
