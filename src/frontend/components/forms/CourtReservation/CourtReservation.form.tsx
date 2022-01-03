import { Grid } from "@mui/material";
import { FormProps } from "components/forms/types";
import { Court, CourtReservation, Employee } from "@models";
import {
  courtReservationService,
  courtService,
  employeeService,
} from "@services";
import { courtReservationSchema } from "./CourtReservation.validation";
import { isEntity } from "shared/utils";
import { DateSelect, Form, SelectField, TimePicker } from "shared/components";
import { useListContext } from "shared/contexts";
import { useDateReducer } from "components/hooks";
import { useEffect, useMemo, useState } from "react";

const createReservationValues = <T extends CourtReservation.Model>(): T =>
  ({
    start: new Date(),
    end: new Date(),
    courtId: "",
    teacherId: "",
  } as T);

export const CourtReservationForm = <T extends CourtReservation.Model>({
  initialValues,
}: FormProps<T>) => {
  const { refresh } = useListContext();

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

  const { date, setDate } = useDateReducer();
  const [courts, setCourts] = useState<Court.Entity[]>([]);
  const [teachers, setTeachers] = useState<Employee.Entity[]>([]);

  useEffect(() => {
    courtService.readAll().then(({ items }) => setCourts(items));
  }, []);

  useEffect(() => {
    employeeService
      .readAll()
      .then(({ items }) =>
        setTeachers(items.filter(({ isTeacher, surname, name }) => isTeacher))
      );
  }, []);

  return (
    <Form
      validationSchema={courtReservationSchema}
      initialValues={initialValues || createReservationValues<T>()}
      onSubmit={handleSuccess}
      onRemove={handleRemove}
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <SelectField
            name={"courtId"}
            label={"Choose court"}
            options={courts
              .sort()
              .map((court) => new Option(court.name, court.id))}
          />
        </Grid>
        <Grid item xs={12}>
          <DateSelect
            date={date}
            onChange={setDate}
            min={useMemo(() => new Date(), [])}
          />
        </Grid>
        <Grid item xs={12}>
          <TimePicker date={date} name={"start"} label={"Start time"} />
        </Grid>
        <Grid item xs={12}>
          <TimePicker date={date} name={"end"} label={"End time"} />
        </Grid>
        <Grid item xs={12}>
          <SelectField
            name={"teacherId"}
            label={"Teacher"}
            options={teachers
              .sort()
              .map(
                (teacher) =>
                  new Option(
                    teacher.surname.concat(" ", teacher.name),
                    teacher.id
                  )
              )}
          />
        </Grid>
      </Grid>
    </Form>
  );
};
