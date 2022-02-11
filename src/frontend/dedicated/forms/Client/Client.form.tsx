import { FormProps } from "dedicated/forms/types";
import { Client } from "@models";
import { clientService } from "@services";
import { isEntity } from "shared/utils";
import { BooleanField, Form, TextField } from "shared/components";
import { useListContext } from "shared/contexts";
import { clientSchema } from "./Client.validation";
import { style } from "styles";
import { DateField } from "shared/components/Form/fields/DateField";

const createClientValues = <T extends Client.Model>(): T =>
  ({
    address: "",
    birthdate: null,
    email: "",
    isPermanent: false,
    name: "",
    phone: "",
    surname: "",
  } as any);

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

  return (
    <Form
      validationSchema={clientSchema}
      initialValues={initialValues || createClientValues<T>()}
      onSubmit={handleSuccess}
      onRemove={handleRemove}
    >
      <div className={style("form--split")}>
        <TextField name="name" label="Name" />
        <TextField name="surname" label="Surname" />
      </div>
      <TextField name="address" label="Address" />
      <DateField
        name="birthdate"
        label="Birthdate"
        minYear={1960}
        maxYear={2010}
      />
      <TextField name="phone" label="Phone number" />
      <TextField name="email" label="Email address" />
      <BooleanField name="isPermanent" label="Is a permanent client" />
    </Form>
  );
};
