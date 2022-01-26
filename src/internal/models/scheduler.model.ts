import { Cell as ListCell } from "react-table";
import { Column as ListColumn } from "shared/components/List";
import { Nullable } from "@internal/types";
import { CourtReservation } from "@models/court-reservation";
import { noop } from "lodash";

export module Scheduler {
  export interface Row {
    reserved: Nullable<CourtReservation.Entity>[];
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

  export interface CellRef {
    reservations: CourtReservation.Entity[];
    column: Nullable<number>;
    row: Nullable<number>;
    start: Nullable<Date>;
    end: Nullable<Date>;
    refresh: () => void;
    interval: Interval;
  }

  export type Column = ListColumn<Row, CellRef>;

  export const ref: Scheduler.CellRef = {
    column: null,
    row: null,
    start: null,
    end: null,
    refresh: noop,
    reservations: [],
    interval: {
      start: new Date(),
      end: new Date(),
    },
  };
}
