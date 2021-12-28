import { SqlCommand, SqlResponse } from "$sql/types";
import { Employee } from "@models";
import { translatePerson } from "$sql/orm/person.orm";
import { uuid } from "@internal/types";

export const translateEmployee = (raw: SqlResponse): Employee.Entity => ({
  ...translatePerson(raw),
  isTeacher: raw.is_teacher,
  payroll: raw.payroll,
  bankAccount: raw.bank_account,
});

export const createEmployee = (model: Employee.Model): SqlCommand => `
  insert into employee(name, surname, address, phone, birthdate, email, payroll, bank_account, is_teacher)
  values ('${model.name}',
          '${model.surname}',
          '${model.address}',
          '${model.phone}',
          '${model.birthdate}',
          ${model.email ? `'${model.email}'` : null},
          ${model.payroll},
          '${model.bankAccount}',
          ${model.isTeacher})
`;

export const updateEmployee = (id: uuid, model: Employee.Model): SqlCommand => `
  update employee
  set name         = '${model.name}',
      surname      = '${model.surname}',
      address      = '${model.address}',
      phone        = '${model.phone}',
      birthdate    = '${model.birthdate}',
      email        = ${model.email ? `'${model.email}'` : null},
      payroll      = ${model.payroll},
      bank_account = '${model.bankAccount}',
      is_teacher   = ${model.isTeacher}
  where id = '${id}';
`;

export const deleteEmployee = (id: uuid): SqlCommand => `
  delete from employee where id = '${id}';
`;
