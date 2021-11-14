import {
  Dictionary,
  each,
  extend,
  isNil,
  keyBy,
  mapValues,
  omitBy,
} from 'lodash';
import { HeaderGroup, Row } from 'react-table';
import { Column } from './types';

const columnKey = <T extends object>(column: Column<T>) =>
  'id' in column ? column.id : column.accessor;

export const getColumnsById = <T extends object>(columns: Column<T>[]) =>
  keyBy(columns, columnKey) as Dictionary<Column<T>>;

export const prepareCells = <T extends object>(
  rows: Row<T>[],
  columns: Column<T>[],
) => {
  const columnById = getColumnsById(columns);

  each(rows, (row) =>
    each(row.cells, (cell, index) => {
      const {
        onCellClick,
        onCellDragEnd,
        onCellDragEnter,
        onCellDragOver,
        onCellDragStart,
      } = columnById[cell.column.id];

      const props = { index, cell, rows, columns };
      const fns = {
        onClick: onCellClick,
        onDragEnd: onCellDragEnd,
        onDragEnter: onCellDragEnter,
        onDragOver: onCellDragOver,
        onDragStart: onCellDragStart,
      };

      extend(
        cell,
        mapValues(omitBy(fns, isNil), (fn) => () => fn?.(props)),
      );
    }),
  );
};

export const prepareHeaders = <T extends object>(
  groups: HeaderGroup<T>[],
  rows: Row<T>[],
  columns: Column<T>[],
) => {
  const columnById = getColumnsById(columns);

  each(groups, (group) =>
    each(group.headers, (header, index) => {
      const {
        onHeaderClick,
        onHeaderDragEnd,
        onHeaderDragEnter,
        onHeaderDragOver,
        onHeaderDragStart,
      } = columnById[header.id];

      const props = { header, index, group, groups, rows, columns };
      const fns = {
        onClick: onHeaderClick,
        onDragEnd: onHeaderDragEnd,
        onDragEnter: onHeaderDragEnter,
        onDragOver: onHeaderDragOver,
        onDragStart: onHeaderDragStart,
      };

      extend(
        header,
        mapValues(omitBy(fns, isNil), (fn) => () => fn?.(props)),
      );
    }),
  );
};
