import { Grid } from "@mui/material";
import { FormProps } from "components/forms/types";
import { Court } from "@models";
import { courtService } from "@services";
import { courtSchema } from "./Court.validation";
import { isEntity } from "shared/utils";
import { Form, TextField } from "shared/components";

const handleSuccess = <T extends Court.Model>(values: T) =>
  isEntity(values)
    ? courtService.update(values.id, values)
    : courtService.create(values);

const createCourtValues = () => ({
  name: "",
  floor: "",
  isCovered: false,
  isUnderMaintenance: false,
});

export const CourtForm = <T extends Court.Model>({
  initialValues,
}: FormProps<T>) => (
  <Form
    validationSchema={courtSchema}
    initialValues={initialValues || createCourtValues()}
    onSubmit={handleSuccess}
  >
    <Grid container spacing={1.5}>
      <Grid item xs={6}>
        <TextField name="name" label="Court name" />
      </Grid>
      <Grid item xs={6}>
        <TextField name="floor" label="Floor type" />
      </Grid>
      <Grid item xs={12}>
        <TextField name="isCovered" label="Is roof covered" />
      </Grid>
      <Grid item xs={12}>
        <TextField name="isUnderMaintenance" label="Is under maintenance" />
      </Grid>
    </Grid>
  </Form>
);
