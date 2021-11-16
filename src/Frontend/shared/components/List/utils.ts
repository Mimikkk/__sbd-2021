import {
  Dictionary,
  each,
  extend,
  isNil,
  keyBy,
  mapValues,
  omitBy,
} from 'lodash';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { HeaderGroup, Row } from 'react-table';
import { Column } from './types';

const columnKey = <T extends object, S, R>(column: Column<T, S, R>) =>
  'id' in column ? column.id : column.accessor;

export const getColumnsById = <T extends object, S, R>(
  columns: Column<T, S, R>[],
) => keyBy(columns, columnKey) as Dictionary<Column<T, S, R>>;

export const prepareCells = <T extends object, S, R>(
  rows: Row<T>[],
  columns: Column<T, S, R>[],
  state: S,
  setState: Dispatch<SetStateAction<S>>,
  ref: MutableRefObject<R>,
) => {
  const columnById = getColumnsById(columns);

  each(rows, (row) =>
    each(row.cells, (cell, index) => {
      const {
        onCellClick: onClick,
        onCellDragEnd: onDragEnd,
        onCellDragEnter: onDragEnter,
        onCellDragOver: onDragOver,
        onCellDragStart: onDragStart,
      } = columnById[cell.column.id];

      const props = { index, cell, rows, columns, state, setState, ref };
      const fns = { onClick, onDragEnd, onDragEnter, onDragOver, onDragStart };

      extend(
        cell,
        mapValues(
          omitBy(fns, isNil),
          (fn) => (event: DragEvent) => fn?.({ ...props, event }),
        ),
      );
    }),
  );
};

export const prepareHeaders = <T extends object, S, R>(
  groups: HeaderGroup<T>[],
  rows: Row<T>[],
  columns: Column<T, S, R>[],
  state: S,
  setState: Dispatch<SetStateAction<S>>,
  ref: MutableRefObject<R>,
) => {
  const columnById = getColumnsById(columns);

  each(groups, (group) =>
    each(group.headers, (header, index) => {
      const {
        onHeaderClick: onClick,
        onHeaderDragEnd: onDragEnd,
        onHeaderDragEnter: onDragEnter,
        onHeaderDragOver: onDragOver,
        onHeaderDragStart: onDragStart,
      } = columnById[header.id];

      const props = {
        header,
        index,
        group,
        groups,
        rows,
        columns,
        state,
        setState,
        ref,
      };
      const fns = { onClick, onDragEnd, onDragEnter, onDragOver, onDragStart };

      extend(
        header,
        mapValues(
          omitBy(fns, isNil),
          (fn) => (event: DragEvent) => fn?.({ ...props, event }),
        ),
      );
    }),
  );
};
