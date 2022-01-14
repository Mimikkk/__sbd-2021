import { FormProps } from "dedicated/forms/types";
import { Item } from "@models";
import { itemService } from "@services";
import { ItemSchema } from "./Item.validation";
import { isEntity } from "shared/utils";
import { Form, TextField } from "shared/components";
import { useListContext } from "shared/contexts";

const createItemValues = <T extends Item.Model>(): T =>
  ({
    count: 0,
    description: "",
    name: "",
  } as T);

export const ItemForm = <T extends Item.Model>({
  initialValues,
}: FormProps<T>) => {
  const { refresh } = useListContext();

  const handleSuccess = async (values: T) => (
    await (isEntity(values)
      ? itemService.update(values.id, values)
      : itemService.create(values)),
    refresh()
  );

  const handleRemove = async (values: T) => (
    await (isEntity(values) && itemService.delete(values.id)), refresh()
  );

  return (
    <Form
      validationSchema={ItemSchema}
      initialValues={initialValues || createItemValues<T>()}
      onSubmit={handleSuccess}
      onRemove={handleRemove}
    >
      <TextField name="name" label="Item name" />
      <TextField name="count" label="Available items" />
      <TextField name="description" label="Description" />
    </Form>
  );
};
