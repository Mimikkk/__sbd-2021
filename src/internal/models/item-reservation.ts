import { uuid } from "@internal/types";
import { Reservation } from "./reservation.model";

export module ItemReservation {
  export interface Model extends Reservation.Model {
    itemId: uuid;
    count: number;
  }
  export interface Entity extends Reservation.Entity, Model {}
}
