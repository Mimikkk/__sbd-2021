import { SqlResponse } from "$sql/types";
import { Person } from "@models";
import { translateFootprint } from "./footprint.orm";

export const translatePerson = (raw: SqlResponse): Person.Entity => ({
  ...translateFootprint(raw),
  name: raw.name,
  surname: raw.surname,
  email: raw.email,
  phone: raw.phone,
  address: raw.address,
  birthdate: raw.birthdate,
});
