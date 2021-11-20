import { MutableRefObject } from 'react';
import { Cell, Column as TableColumn, HeaderGroup, Row } from 'react-table';

export interface CellClickFnProps<T extends object, R> {
  event: DragEvent;
  cell: Cell<T>;
  index: number;
  rows: Row<T>[];
  columns: Column<T, R>[];
  ref: MutableRefObject<R>;
}

export interface HeaderClickFnProps<T extends object, R> {
  event: DragEvent;
  header: HeaderGroup<T>;
  index: number;
  group: HeaderGroup<T>;
  groups: HeaderGroup<T>[];
  rows: Row<T>[];
  columns: Column<T, R>[];
  ref: MutableRefObject<R>;
}

export type Column<T extends object, R = undefined> = TableColumn<T> & {
  onCellClick?: (props: CellClickFnProps<T, R>) => void;
  onCellDragStart?: (props: CellClickFnProps<T, R>) => void;
  onCellDragEnd?: (props: CellClickFnProps<T, R>) => void;
  onCellDragEnter?: (props: CellClickFnProps<T, R>) => void;
  onCellDragOver?: (props: CellClickFnProps<T, R>) => void;
  onHeaderClick?: (props: HeaderClickFnProps<T, R>) => void;
  onHeaderDragStart?: (props: HeaderClickFnProps<T, R>) => void;
  onHeaderDragEnd?: (props: HeaderClickFnProps<T, R>) => void;
  onHeaderDragEnter?: (props: HeaderClickFnProps<T, R>) => void;
  onHeaderDragOver?: (props: HeaderClickFnProps<T, R>) => void;
};
