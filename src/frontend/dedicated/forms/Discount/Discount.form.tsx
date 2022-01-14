import { FormProps } from "dedicated/forms/types";
import { Discount } from "@models";
import { discountService } from "@services";
import { discountSchema } from "./Discount.validation";
import { isEntity } from "shared/utils";
import { BooleanField, Form, TextField } from "shared/components";
import { useListContext } from "shared/contexts";
import { style } from "styles";

const createDiscountValues = <T extends Discount.Model>(): T =>
  ({
    description: "",
    isPercentage: true,
    name: "",
    value: 0,
  } as T);

export const DiscountForm = <T extends Discount.Model>({
  initialValues,
}: FormProps<T>) => {
  const { refresh } = useListContext();
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
      <TextField name="name" label="Discount name" />
      <div className={style("form--split")}>
        <BooleanField name="isPercentage" label="Is a percentage" />
        <TextField name="value" label="Value" />
      </div>
      <TextField name="description" label="Description" />
    </Form>
  );
};
