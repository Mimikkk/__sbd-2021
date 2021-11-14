import { Cell, Column as TableColumn, HeaderGroup, Row } from 'react-table';

export interface CellClickFnProps<T extends object> {
  cell: Cell<T>;
  index: number;
  rows: Row<T>[];
  columns: Column<T>[];
}

export interface HeaderClickFnProps<T extends object> {
  header: HeaderGroup<T>;
  index: number;
  group: HeaderGroup<T>;
  groups: HeaderGroup<T>[];
  rows: Row<T>[];
  columns: Column<T>[];
}

export type Column<T extends object> = TableColumn<T> & {
  onCellClick?: (props: CellClickFnProps<T>) => void;
  onHeaderClick?: (props: HeaderClickFnProps<T>) => void;
};
