import { Cell as ListCell } from 'react-table';
import { Column as ListColumn } from 'shared/components/List';
import { Nullable } from 'shared/types';
import { ReactNode } from 'react';

export module Scheduler {
  export interface Row {
    selected: boolean[];
    time: Date;
  }
  export interface Cell extends ListCell<Row> {}

  export interface RowRef {
    isDragging: boolean;
    selected: Nullable<ReactNode>;
    start: Nullable<Cell>;
    current: Nullable<Cell>;
  }

  export type Column = ListColumn<Row, undefined, RowRef>;

  export const initialRef: Scheduler.RowRef = {
    selected: null,
    start: null,
    current: null,
    isDragging: false,
  };
}
