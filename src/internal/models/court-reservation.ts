import { Nullable, uuid } from "@internal/types";
import { Reservation } from "./reservation.model";

export module CourtReservation {
  export interface Model extends Reservation.Model {
    courtId: uuid;
    teacherId: Nullable<uuid>;
  }

  export interface Entity extends Reservation.Entity, Model {}

  export interface Row extends Model {
    court?: string;
    teacher?: string;
  }
}
