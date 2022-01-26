import { FormProps } from "dedicated/forms/types";
import { Employee } from "@models";
import { employeeService } from "@services";
import { isEntity } from "shared/utils";
import { BooleanField, Form, TextField } from "shared/components";
import { useListContext } from "shared/contexts";
import { employeeSchema } from "./Employee.validation";
import { style } from "styles";
import { DateField } from "shared/components/Form/fields/DateField";

const createEmployeeValues = <T extends Employee.Model>(): T =>
  ({
    name: "",
    surname: "",
    address: "",
    birthdate: new Date(),
    phone: "",
    isTeacher: false,
    payroll: 0,
    bankAccount: "",
  } as T);

export const EmployeeForm = <T extends Employee.Model>({
  initialValues,
}: FormProps<T>) => {
  const { refresh } = useListContext();

  const handleSuccess = async (values: T) => (
    await (isEntity(values)
      ? employeeService.update(values.id, values)
      : employeeService.create(values)),
    refresh()
  );

  const handleRemove = async (values: T) => (
    await (isEntity(values) && employeeService.delete(values.id)), refresh()
  );

  return (
    <Form
      validationSchema={employeeSchema}
      initialValues={initialValues || createEmployeeValues<T>()}
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
        minYear={1950}
        maxYear={2010}
      />
      <TextField name="phone" label="Phone number" />
      <TextField name="email" label="Email address" />
      <TextField name="bankAccount" label="Bank account number" />
      <div className={style("form--split")}>
        <TextField name="payroll" label="Salary" />
        <BooleanField name="isTeacher" label="Is a teacher" />
      </div>
    </Form>
  );
};
