import { FormProps } from "dedicated/forms/types";
import { Court, CourtReservation } from "@models";
import {
  courtReservationService,
  courtService,
  employeeService,
} from "@services";
import { courtReservationSchema } from "./CourtReservation.validation";
import { isEntity, peopleToOptions } from "shared/utils";
import { DateSelect, Form, SelectField, HourField } from "shared/components";
import { useListContext } from "shared/contexts";
import { useDate, useListFetch } from "shared/hooks";
import { useMemo } from "react";
import { filter } from "lodash";
import { itemsToOptions } from "shared/utils/options";
import { addDays } from "date-fns";

export const createReservationValues = <
  T extends CourtReservation.Model
>(): T =>
  ({
    start: null,
    end: null,
    courtId: "",
    teacherId: "",
  } as any);

export const CourtReservationForm = <T extends CourtReservation.Model>({
  initialValues,
}: FormProps<T>) => {
  let { refresh } = useListContext();

  const handleSuccess = async (values: T) => (
    await (isEntity(values)
      ? courtReservationService.update(values.id, values)
      : courtReservationService.create(values)),
    refresh()
  );

  const handleRemove = async (values: T) => (
    await (isEntity(values) && courtReservationService.delete(values.id)),
    refresh()
  );

  const { date, setDate } = useDate();

  const {
    list: { items: courts },
  } = useListFetch(courtService.readAll);
  const {
    list: { items: teachers },
  } = useListFetch(() =>
    employeeService.readAll().then(({ items, ...meta }) => ({
      items: filter(items, "isTeacher"),
      ...meta,
    }))
  );

  const { min, max } = useMemo(
    () => ({
      min: new Date(addDays(date, 1)),
      max: new Date(addDays(date, 15)),
    }),
    []
  );
  return (
    <Form
      validationSchema={courtReservationSchema}
      initialValues={initialValues || createReservationValues<T>()}
      onSubmit={handleSuccess}
      onRemove={handleRemove}
    >
      <SelectField
        name={"courtId"}
        label={"Court"}
        options={itemsToOptions(courts)}
      />
      <DateSelect date={date} onChange={setDate} min={min} max={max} />
      <HourField
        name="start"
        day={date}
        minHour={7}
        maxHour={22}
        minutesStep={30}
        label="Start time"
      />
      <HourField
        name="end"
        day={date}
        minHour={7}
        maxHour={22}
        minutesStep={30}
        label="End time"
      />
      <SelectField
        name="teacherId"
        label="Teacher"
        options={peopleToOptions(teachers)}
      />
    </Form>
  );
};
