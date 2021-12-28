import { SqlCommand, SqlResponse } from "$sql/types";
import { Client } from "@models";
import { translatePerson } from "$sql/orm/person.orm";
import { uuid } from "@internal/types";

export const translateClient = (raw: SqlResponse): Client.Entity => ({
  ...translatePerson(raw),
  isPermanent: raw.is_permanent,
});

export const createClient = (model: Client.Model): SqlCommand => `
  insert into client(name, surname, address, phone, birthdate, email, is_permanent)
  values ('${model.name}',
          '${model.surname}',
          '${model.address}',
          '${model.phone}',
          '${model.birthdate}',
          ${model.email ? `'${model.email}'` : null},
          ${model.isPermanent});
`;

export const updateClient = (id: uuid, model: Client.Model): SqlCommand => `
  update client
  set name         = '${model.name}',
      surname      = '${model.surname}',
      address      = '${model.address}',
      phone        = '${model.phone}',
      birthdate    = '${model.birthdate}',
      email        = ${model.email ? `'${model.email}'` : null},
      is_permanent = ${model.isPermanent}
  where id = ${id};
`;
