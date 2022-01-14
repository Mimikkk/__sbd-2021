import { object, Schema, date, string } from "yup";
import { CourtReservation } from "@models";
import { isAfter } from "date-fns";

export const courtReservationSchema: Schema<CourtReservation.Model> =
  object<CourtReservation.Model>({
    courtId: string().required(),
    start: date().required("Start time cant be empty"),
    end: date()
      .required()
      .test(
        "is end before start",
        "End must be after the start",
        (end, { parent: { start } }) => isAfter(end!, start)
      ),
    teacherId: string().nullable() as any,
  }).defined();
