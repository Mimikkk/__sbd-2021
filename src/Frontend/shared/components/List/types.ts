import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { Cell, Column as TableColumn, HeaderGroup, Row } from 'react-table';

export interface CellClickFnProps<T extends object, S, R> {
  cell: Cell<T>;
  index: number;
  rows: Row<T>[];
  columns: Column<T, S, R>[];
  state: S;
  setState: Dispatch<SetStateAction<S>>;
  ref: MutableRefObject<R>;
}

export interface HeaderClickFnProps<T extends object, S, R> {
  header: HeaderGroup<T>;
  index: number;
  group: HeaderGroup<T>;
  groups: HeaderGroup<T>[];
  rows: Row<T>[];
  columns: Column<T, S, R>[];
  state: S;
  setState: Dispatch<SetStateAction<S>>;
  ref: MutableRefObject<R>;
}

export type Column<T extends object, S, R> = TableColumn<T> & {
  onCellClick?: (props: CellClickFnProps<T, S, R>) => void;
  onCellDragStart?: (props: CellClickFnProps<T, S, R>) => void;
  onCellDragEnd?: (props: CellClickFnProps<T, S, R>) => void;
  onCellDragEnter?: (props: CellClickFnProps<T, S, R>) => void;
  onCellDragOver?: (props: CellClickFnProps<T, S, R>) => void;
  onHeaderClick?: (props: HeaderClickFnProps<T, S, R>) => void;
  onHeaderDragStart?: (props: HeaderClickFnProps<T, S, R>) => void;
  onHeaderDragEnd?: (props: HeaderClickFnProps<T, S, R>) => void;
  onHeaderDragEnter?: (props: HeaderClickFnProps<T, S, R>) => void;
  onHeaderDragOver?: (props: HeaderClickFnProps<T, S, R>) => void;
};
