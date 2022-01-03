import { Grid } from "@mui/material";
import { FormProps } from "components/forms/types";
import { Price } from "@models";
import { priceService } from "@services";
import { priceSchema } from "./Price.validation";
import { isEntity } from "shared/utils";
import { Form, TextField } from "shared/components";
import { useListContext } from "shared/contexts";

const createPriceValues = <T extends Price.Model>(): T =>
  ({
    cost: 0,
    description: ""
  } as T);

export const PriceForm = <T extends Price.Model>({
                                                 initialValues,
                                               }: FormProps<T>) => {
  const { refresh } = useListContext();

  const handleSuccess = async (values: T) => (
    await (isEntity(values)
      ? priceService.update(values.id, values)
      : priceService.create(values)),
      refresh()
  );

  const handleRemove = async (values: T) => (
    await (isEntity(values) && priceService.delete(values.id)), refresh()
  );

  return (
    <Form
      validationSchema={priceSchema}
      initialValues={initialValues || createPriceValues<T>()}
      onSubmit={handleSuccess}
      onRemove={handleRemove}
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12}>
          <TextField name="description" label="Service" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="cost" label="Value" />
        </Grid>
      </Grid>
    </Form>
  );
};
