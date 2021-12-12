import { SqlResponse } from "$sql/types";
import { Employee } from "@models";
import { translatePerson } from "$sql/orm/person.orm";

export const translateEmployee = (raw: SqlResponse): Employee.Entity => ({
  ...translatePerson(raw),
  isTeacher: raw.is_teacher,
  payroll: raw.payroll,
  bankAccount: raw.bank_account,
});
