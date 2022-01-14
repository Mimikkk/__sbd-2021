import { FormProps } from "dedicated/forms/types";
import { Court, CourtReservation, Employee } from "@models";
import {
  courtReservationService,
  courtService,
  employeeService,
} from "@services";
import { courtReservationSchema } from "./CourtReservation.validation";
import { isEntity, personToOptions } from "shared/utils";
import {
  DateSelect,
  Form,
  SelectField,
  HourSelectField,
} from "shared/components";
import { useListContext } from "shared/contexts";
import { useDate } from "shared/hooks";
import React, { useEffect, useMemo, useState } from "react";
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
  const [courts, setCourts] = useState<Court.Entity[]>([]);
  const [teachers, setTeachers] = useState<Employee.Entity[]>([]);

  useEffect(() => {
    courtService.readAll().then(({ items }) => setCourts(items));
  }, []);

  useEffect(() => {
    employeeService
      .readAll()
      .then(({ items }) => setTeachers(filter(items, "isTeacher")));
  }, []);

  return (
    <Form
      validationSchema={courtReservationSchema}
      initialValues={initialValues || createReservationValues<T>()}
      onSubmit={handleSuccess}
      onRemove={handleRemove}
    >
      <SelectField
        name={"courtId"}
        label={"Choose court"}
        options={itemsToOptions(courts)}
      />
      <DateSelect
        date={date}
        onChange={setDate}
        min={useMemo(() => new Date(addDays(date, 1)), [])}
        max={useMemo(() => new Date(addDays(date, 15)), [])}
      />
      <HourSelectField
        name="start"
        day={date}
        minHour={7}
        maxHour={22}
        minutesStep={30}
        label="Start time"
      />
      <HourSelectField
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
        options={personToOptions(teachers)}
      />
    </Form>
  );
};
