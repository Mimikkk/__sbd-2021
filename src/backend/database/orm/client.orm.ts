import { Client } from "@models";
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
import { identity } from "lodash";

const table = "client";
const sql: SqlMap<Client.Entity> = {
  ...personTranslation,
  isPermanent: identity,
};
const translations: TranslationMap<Client.Model> = {
  name: str,
  isPermanent: num,
  surname: str,
  address: str,
  phone: str,
  birthdate: str,
  email: nil,
};

export const translateClient = createTranslation(sql);
export const createClient = createCreate(table, translations);
export const updateClient = createUpdate(table, translations);
export const deleteClient = createDelete(table);
