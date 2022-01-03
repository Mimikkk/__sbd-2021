import { object, Schema, date, string } from "yup";
import { CourtReservation } from "@models";
import { isSameOrBefore } from "shared/utils/dates";

export const courtReservationSchema: Schema<CourtReservation.Model> =
  object<CourtReservation.Model>({
    courtId: string().required(),
    start: date()
      .required("Start time cant be empty")
      .test(
        "is end before start",
        "Start time must be before end time",
        (value, { parent: { end } }) => isSameOrBefore(value as Date, end)
      ),
    end: date().required(),
    teacherId: string(),
  }).defined();
