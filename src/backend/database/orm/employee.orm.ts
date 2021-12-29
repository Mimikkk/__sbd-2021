import { Employee } from "@models";
import { personTranslation } from "$sql/orm/person.orm";
import {
  createCreate,
  createDelete,
  createTranslation,
  createUpdate,
  nil,
  num,
  SqlMap,
  str,
  TranslationMap,
} from "$sql/orm/utils";
import { footprintTranslation } from "$sql/orm/footprint.orm";
import { identity } from "lodash";

const table = "employee";
const translations: TranslationMap<Employee.Model> = {
  ...footprintTranslation,
  name: str,
  surname: str,
  address: str,
  phone: str,
  birthdate: str,
  email: nil,
  payroll: str,
  bankAccount: str,
  isTeacher: num,
};
const sql: SqlMap<Employee.Entity> = {
  ...personTranslation,
  isTeacher: identity,
  payroll: identity,
  bankAccount: identity,
};

export const translateEmployee = createTranslation(sql);
export const createEmployee = createCreate(table, translations);
export const updateEmployee = createUpdate(table, translations);
export const deleteEmployee = createDelete(table);
