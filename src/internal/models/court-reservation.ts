import { Nullable, uuid } from "@internal/types";
import { Reservation } from "./reservation.model";

export module CourtReservation {
  export interface Model extends Reservation.Model {
    courtId: uuid;
    teacherId: Nullable<uuid>;
  }

  export interface Entity extends Reservation.Entity, Model {
    isPending: boolean;
  }

  export interface Row extends Entity {
    court?: string;
    teacher?: string;
  }
}
