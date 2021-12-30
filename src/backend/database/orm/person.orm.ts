import { Person } from "@models";
import { footprintTranslation } from "./footprint.orm";
import { SqlMap } from "$sql/orm/utils";
import { identity } from "lodash";

export const personTranslation: SqlMap<Person.Entity> = {
  ...footprintTranslation,
  name: identity,
  surname: identity,
  email: identity,
  phone: identity,
  address: identity,
  birthdate: identity,
};
