import { Grid } from "@mui/material";
import { FormProps } from "components/forms/types";
import { Court } from "@models";
import { courtService } from "@services";
import { courtSchema } from "./Court.validation";
import { isEntity } from "shared/utils";
import { Form, SelectField, TextField } from "shared/components";
import { useListContext } from "shared/contexts";

const createCourtValues = <T extends Court.Model>(): T =>
  ({
    name: "",
    floor: "",
    isCovered: false,
    isUnderMaintenance: false,
  } as T);

export const CourtForm = <T extends Court.Model>({
  initialValues,
}: FormProps<T>) => {
  const { refresh } = useListContext();

  const handleSuccess = async (values: T) => (
    await (isEntity(values)
      ? courtService.update(values.id, values)
      : courtService.create(values)),
    refresh()
  );

  const handleRemove = async (values: T) => (
    await (isEntity(values) && courtService.delete(values.id)), refresh()
  );

  return (
    <Form
      validationSchema={courtSchema}
      initialValues={initialValues || createCourtValues<T>()}
      onSubmit={handleSuccess}
      onRemove={handleRemove}
    >
      <Grid container spacing={1.5}>
        <Grid item xs={6}>
          <TextField name="name" label="Court name" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="floor" label="Floor type" />
        </Grid>
        <Grid item xs={12}>
          <SelectField
            options={[
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ]}
            name="isCovered"
            label="Is roof covered"
          />
        </Grid>
        <Grid item xs={12}>
          <SelectField
            options={[
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ]}
            name="isUnderMaintenance"
            label="Is under maintenance"
          />
        </Grid>
      </Grid>
    </Form>
  );
};
