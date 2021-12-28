import { SqlCommand, SqlResponse } from "$sql/types";
import { Item } from "@models";
import { translateFootprint } from "./footprint.orm";
import { uuid } from "@internal/types";

export const translateItem = (raw: SqlResponse): Item.Entity => ({
  ...translateFootprint(raw),
  description: raw.description,
  count: raw.count,
  name: raw.name,
});

export const createItem = (model: Item.Model): SqlCommand => `
  insert into item(name, count, description)
  values ('${model.name}', ${model.count}, '${model.description}')
`;

export const updateItem = (id: uuid, model: Item.Model): SqlCommand => `
  update item
  set name        = '${model.name}',
      count       = ${model.count},
      description = '${model.description}'
  where id = '${id}';
`;

export const deleteItem = (id: uuid): SqlCommand => `
  delete from item where id = '${id}';
`;
