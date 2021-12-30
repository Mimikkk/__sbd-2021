import { object, string, boolean, Schema, date, number } from 'yup';
import { Employee } from '@models';

export const employeeSchema: Schema<Employee.Model> = object<Employee.Model>({
  address: string(),
  bankAccount: string(),
  birthdate: date(),
  email: string(),
  isTeacher: boolean(),
  name: string(),
  payroll: number(),
  phone: string(),
  surname: string()
}).defined();