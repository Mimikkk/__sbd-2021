import { MutableRefObject } from "react";
import { Cell, Column as TableColumn, HeaderGroup, Row } from "react-table";

export interface CellEventProps<T extends object, R> {
  event: DragEvent;
  cell: Cell<T>;
  rows: Row<T>[];
  columns: Column<T, R>[];
  ref: MutableRefObject<R>;
}

export interface HeaderEventProps<T extends object, R> {
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
  onCellClick?: (props: CellEventProps<T, R>) => void;
  onCellDragStart?: (props: CellEventProps<T, R>) => void;
  onCellDragEnd?: (props: CellEventProps<T, R>) => void;
  onCellDragEnter?: (props: CellEventProps<T, R>) => void;
  onCellDragOver?: (props: CellEventProps<T, R>) => void;
  onHeaderClick?: (props: HeaderEventProps<T, R>) => void;
  onHeaderDragStart?: (props: HeaderEventProps<T, R>) => void;
  onHeaderDragEnd?: (props: HeaderEventProps<T, R>) => void;
  onHeaderDragEnter?: (props: HeaderEventProps<T, R>) => void;
  onHeaderDragOver?: (props: HeaderEventProps<T, R>) => void;
};
