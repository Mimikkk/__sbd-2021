import { object, Schema, date } from "yup";
import { Reservation } from '@models';

export const reservationSchema: Schema<Reservation.Model> = object<Reservation.Model>({
  start: date().required(),
  end: date().required(),
}).defined();
