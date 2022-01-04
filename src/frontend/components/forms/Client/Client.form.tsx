import { Grid } from "@mui/material";
import { FormProps } from "components/forms/types";
import { Client } from "@models";
import { clientService } from "@services";
import { isEntity } from "shared/utils";
import { DateSelect, Form, SelectField, TextField } from "shared/components";
import { useListContext } from "shared/contexts";
import { clientSchema } from "./Client.validation";
import { useDate } from "shared/hooks";

const createClientValues = <T extends Client.Model>(): T =>
  ({
    address: "",
    birthdate: new Date(),
    email: "",
    isPermanent: false,
    name: "",
    phone: "",
    surname: "",
  } as T);

export const ClientForm = <T extends Client.Model>({
  initialValues,
}: FormProps<T>) => {
  const { refresh } = useListContext();

  const handleSuccess = async (values: T) => (
    await (isEntity(values)
      ? clientService.update(values.id, values)
      : clientService.create(values)),
    refresh()
  );

  const handleRemove = async (values: T) => (
    await (isEntity(values) && clientService.delete(values.id)), refresh()
  );

  const { date, setDate } = useDate();

  return (
    <Form
      validationSchema={clientSchema}
      initialValues={initialValues || createClientValues<T>()}
      onSubmit={handleSuccess}
      onRemove={handleRemove}
    >
      <Grid container item spacing={2.5}>
        <Grid item xs={6}>
          <TextField name="name" label="Name" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="surname" label="Surname" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="address" label="Address" />
        </Grid>
        <Grid item xs={6}>
          <DateSelect date={date} onChange={setDate} />
        </Grid>
        <Grid item xs={12}>
          <TextField name="phone" label="Phone number" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="email" label="Email address" />
        </Grid>
        <Grid item xs={12}>
          <SelectField
            options={[
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ]}
            name="isPermanent"
            label="Is permanent client?"
          />
        </Grid>
      </Grid>
    </Form>
  );
};
