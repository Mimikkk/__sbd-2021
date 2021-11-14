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
  onCellDragStart?: (props: CellClickFnProps<T>) => void;
  onCellDragEnd?: (props: CellClickFnProps<T>) => void;
  onCellDragEnter?: (props: CellClickFnProps<T>) => void;
  onCellDragOver?: (props: CellClickFnProps<T>) => void;
  onHeaderClick?: (props: HeaderClickFnProps<T>) => void;
  onHeaderDragStart?: (props: HeaderClickFnProps<T>) => void;
  onHeaderDragEnd?: (props: HeaderClickFnProps<T>) => void;
  onHeaderDragEnter?: (props: HeaderClickFnProps<T>) => void;
  onHeaderDragOver?: (props: HeaderClickFnProps<T>) => void;
};
