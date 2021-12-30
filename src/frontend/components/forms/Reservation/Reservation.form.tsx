import { Grid } from "@mui/material";
import { FormProps } from "components/forms/types";
import { CourtReservation, Reservation } from '@models';
import { courtReservationService } from "@services";
import { reservationSchema} from "./Reservation.validation";
import { isEntity } from "shared/utils";
import { Form, SelectField, TextField } from "shared/components";
import { useListContext } from "shared/contexts";

const createReservationValues = <T extends CourtReservation.Model>(): T =>
  ({
    start: new Date(),
    end: new Date(),
  } as T);

export const ReservationForm = <T extends CourtReservation.Model>({ initialValues}: FormProps<T>) => {
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

  return (
    <Form
      validationSchema={reservationSchema}
      initialValues={initialValues || createReservationValues<T>()}
      onSubmit={handleSuccess}
      onRemove={handleRemove}
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <SelectField
            options={[
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ]}
            name="start"
            label="Start hour"
          />
        </Grid>
        <Grid item xs={12}>
          <SelectField
            options={[
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ]}
            name="end"
            label="End hour"
          />
        </Grid>
      </Grid>
    </Form>
  );
};
