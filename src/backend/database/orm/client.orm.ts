import { SqlResponse } from "$sql/types";
import { Client } from "@models";
import { translatePerson } from "$sql/orm/person.orm";

export const translateClient = (raw: SqlResponse): Client.Entity => ({
  ...translatePerson(raw),
  isPermanent: raw.is_permanent,
});
