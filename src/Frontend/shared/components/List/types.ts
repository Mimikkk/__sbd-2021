import { Dispatch, SetStateAction } from 'react';
import { Cell, Column as TableColumn, HeaderGroup, Row } from 'react-table';

export interface CellClickFnProps<T extends object, S> {
  cell: Cell<T>;
  index: number;
  rows: Row<T>[];
  columns: Column<T, S>[];
  state: S;
  setState: Dispatch<SetStateAction<S>>;
}

export interface HeaderClickFnProps<T extends object, S> {
  header: HeaderGroup<T>;
  index: number;
  group: HeaderGroup<T>;
  groups: HeaderGroup<T>[];
  rows: Row<T>[];
  columns: Column<T, S>[];
  state: S;
  setState: Dispatch<SetStateAction<S>>;
}

export type Column<T extends object, S> = TableColumn<T> & {
  onCellClick?: (props: CellClickFnProps<T, S>) => void;
  onCellDragStart?: (props: CellClickFnProps<T, S>) => void;
  onCellDragEnd?: (props: CellClickFnProps<T, S>) => void;
  onCellDragEnter?: (props: CellClickFnProps<T, S>) => void;
  onCellDragOver?: (props: CellClickFnProps<T, S>) => void;
  onHeaderClick?: (props: HeaderClickFnProps<T, S>) => void;
  onHeaderDragStart?: (props: HeaderClickFnProps<T, S>) => void;
  onHeaderDragEnd?: (props: HeaderClickFnProps<T, S>) => void;
  onHeaderDragEnter?: (props: HeaderClickFnProps<T, S>) => void;
  onHeaderDragOver?: (props: HeaderClickFnProps<T, S>) => void;
};
