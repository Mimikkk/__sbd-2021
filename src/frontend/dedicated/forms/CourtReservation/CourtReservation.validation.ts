import { object, Schema, date, string } from "yup";
import { CourtReservation } from "@models";
import { getMinutes, isAfter } from "date-fns";

export const courtReservationSchema: Schema<CourtReservation.Model> =
  object<CourtReservation.Model>({
    courtId: string().required(),
    start: date()
      .required("Start time cant be empty")
      .test(
        "is divisible by 30",
        "time is not a whole hour or a half an hour",
        (value) => getMinutes(value!) % 30 === 0
      ),
    end: date()
      .required()
      .test(
        "is end before start",
        "End must be after the start",
        (end, { parent: { start } }) => isAfter(end!, start)
      )
      .test(
        "is divisible by 30",
        "time is not a whole hour or a half an hour",
        (value) => getMinutes(value!) % 30 === 0
      ),

    teacherId: string().nullable() as any,
  }).defined();
