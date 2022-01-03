import { Grid } from "@mui/material";
import { FormProps } from "components/forms/types";
import { Employee } from "@models";
import { employeeService } from "@services";
import { isEntity } from "shared/utils";
import { DateSelect, Form, SelectField, TextField } from "shared/components";
import { useListContext } from "shared/contexts";
import { employeeSchema } from "./Employee.validation";
import { useMemo } from "react";
import { useFormReducer } from "components/hooks";

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

  const { date, setDate } = useFormReducer();

  return (
    <Form
      validationSchema={employeeSchema}
      initialValues={initialValues || createEmployeeValues<T>()}
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
        <Grid item xs={12}>
          <DateSelect
            date={date}
            onChange={setDate}
            max={useMemo(() => new Date(), [])}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField name="phone" label="Phone number" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="email" label="Email address" />
        </Grid>

        <Grid item xs={12}>
          <TextField name="bankAccount" label="Bank account number" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="payroll" label="Salary" />
        </Grid>
        <Grid item xs={6}>
          <SelectField
            options={[
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ]}
            name="isTeacher"
            label="Is a teacher?"
          />
        </Grid>
      </Grid>
    </Form>
  );
};
