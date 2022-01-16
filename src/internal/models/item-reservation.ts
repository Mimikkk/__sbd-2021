import { uuid } from "@internal/types";
import { Reservation } from "./reservation.model";

export module ItemReservation {
  export interface Model extends Reservation.Model {
    courtReservationId: uuid;
    courtId: uuid;
    itemId: uuid;
    priceId: uuid;
    count: number;
  }
  export interface Entity extends Reservation.Entity, Model {}

  export interface Row extends Entity {
    court?: string;
    item?: string;
  }
}
