import { object, string, Schema, number, date } from "yup";
import { ItemReservation } from "@models";
import { isAfter } from "date-fns";

export const ItemReservationSchema: Schema<ItemReservation.Model> =
  object<ItemReservation.Model>({
    count: number().required(),
    itemId: string().required(),
    start: date()
      .required("Start time cannot be empty")
      .test("not empty", "Start time cannot be empty", (value) => !!value),
    end: date()
      .required()
      .test(
        "start_time_test",
        "End must be after the start",
        (end, { parent: { start } }) => isAfter(end!, start)
      ),
  }).defined();
