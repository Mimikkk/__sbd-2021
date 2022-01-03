import { Grid } from "@mui/material";
import { FormProps } from "components/forms/types";
import { Discount } from "@models";
import { discountService } from "@services";
import { discountSchema } from "./Discount.validation";
import { isEntity } from "shared/utils";
import { Form, SelectField, TextField } from "shared/components";
import { useListContext } from "shared/contexts";

const createDiscountValues = <T extends Discount.Model>(): T =>
  ({
    description: "",
    isPercentage: true,
    name: "",
    value: 0
  } as T);

export const DiscountForm = <T extends Discount.Model>({ initialValues}: FormProps<T>) => {
  const {refresh} = useListContext();
  const handleSuccess = async (values: T) => (
    await (isEntity(values)
      ? discountService.update(values.id, values)
      : discountService.create(values)),
      refresh()
  );

  const handleRemove = async (values: T) => (
    await (isEntity(values) && discountService.delete(values.id)), refresh()
  );

  return (
    <Form
      validationSchema={discountSchema}
  initialValues={initialValues || createDiscountValues<T>()}
  onSubmit={handleSuccess}
  onRemove={handleRemove}
    >
    <Grid container spacing={2.5}>
    <Grid item xs={12}>
  <TextField name="name" label="Discount name" />
    </Grid>
      <Grid item xs={6}>
        <SelectField
          options={[
            { value: true, label: "Yes" },
            { value: false, label: "No" },
          ]}
          name="isPercentage"
          label="Is a percentage?"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField name="value" label="Value of discount" />
      </Grid>
      <Grid item xs={12}>
        <TextField name="description" label="Description" />
      </Grid>
    </Grid>
    </Form>
);
};
