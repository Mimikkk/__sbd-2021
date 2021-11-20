import { noop } from 'lodash';
import { Cell as ListCell } from 'react-table';
import { Column as ListColumn } from 'shared/components/List';
import { Nullable } from 'shared/types';

export module Scheduler {
  export interface Row {
    selected: boolean[];
    time: Date;
  }
  export interface Cell extends ListCell<Row> {}

  export interface Reservation {
    start: number;
    end: number;
    court: number;
  }

  export interface ReservationGroups
    extends Record<number, Record<number, Reservation>> {}

  export interface RowRef {
    selected: Nullable<HTMLElement>;
    start: Nullable<Cell>;
    current: Nullable<Cell>;
    add: Nullable<(reservation: Reservation) => void>;
    remove: Nullable<(reservation: Reservation) => void>;
    nearest: { upper: number; lower: number };
  }

  export type Column = ListColumn<Row, RowRef>;

  export const initialRef: Scheduler.RowRef = {
    selected: null,
    start: null,
    current: null,
    add: null,
    remove: null,
    nearest: { upper: 0, lower: 30 },
  };
}
