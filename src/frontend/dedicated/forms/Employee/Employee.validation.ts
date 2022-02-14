import { object, string, boolean, Schema, date, number } from "yup";
import { Employee } from "@models";
import { card, phone } from "shared/utils/validation";

export const employeeSchema: Schema<Employee.Model> = object<Employee.Model>({
  address: string().required(),
  bankAccount: card().required(),
  birthdate: date().required().min(new Date(1960, 0)).max(new Date(2010, 0)),
  email: string().email().required(),
  isTeacher: boolean().required(),
  name: string().required(),
  payroll: number().min(0).max(2500).required(),
  phone: phone().required(),
  surname: string().required(),
}).defined();
