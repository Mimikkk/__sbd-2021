import { Cell as ListCell } from 'react-table';
import { Column as ListColumn } from 'shared/components/List';
import { Nullable } from 'shared/types';

export module Scheduler {
  export interface Row {
    selected: boolean[];
    time: Date;
  }
  export interface Cell extends ListCell<Row> {}

  export interface RowState {
    start: Nullable<Cell>;
    current: Nullable<Cell>;
  }

  export type Column = ListColumn<Row, RowState>;

  export const state: Scheduler.RowState = {
    start: null,
    current: null,
  };
}
