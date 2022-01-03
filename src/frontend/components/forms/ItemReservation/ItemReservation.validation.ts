import { object, string, Schema, number, date } from "yup";
import { ItemReservation } from "@models";
import { isSameOrBefore } from "shared/utils/dates";

export const ItemReservationSchema: Schema<ItemReservation.Model> =
  object<ItemReservation.Model>({
    count: number().required(),
    itemId: string().required(),
    start: date()
      .required("Start time cannot be empty")
      .test(
        "start_time_test",
        "Start time must be before the end time",
        (value, { parent: { end } }) => isSameOrBefore(value as Date, end)
      ),
    end: date().required(),
  }).defined();
