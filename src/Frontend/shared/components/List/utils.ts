import { Dictionary, each, extend, keyBy } from 'lodash';
import { HeaderGroup, Row } from 'react-table';
import { Column } from 'shared/components/List/types';

const columnKey = <T extends object>(column: Column<T>) =>
  'id' in column ? column.id : column.accessor;

export const getColumnsById = <T extends object>(columns: Column<T>[]) =>
  keyBy(columns, columnKey) as Dictionary<Column<T>>;

export const prepareCells = <T extends object>(
  rows: Row<T>[],
  columns: Column<T>[],
) => {
  const columnById = getColumnsById(columns);

  each(
    each(rows, (row) => {
      each(row.cells, (cell, index) => {
        const { onCellClick } = columnById[cell.column.id];
        const onClick = () => onCellClick?.({ index, cell, rows, columns });

        extend(cell, { onClick });
      });
    }),
  );
};

export const prepareHeaders = <T extends object>(
  groups: HeaderGroup<T>[],
  rows: Row<T>[],
  columns: Column<T>[],
) => {
  const columnById = getColumnsById(columns);

  each(groups, (group) => {
    each(group.headers, (header, index) => {
      const { onHeaderClick } = columnById[header.id];
      const onClick = () =>
        onHeaderClick?.({ header, index, group, groups, rows, columns });

      extend(header, { onClick });
    });
  });
};
