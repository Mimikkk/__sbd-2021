import { SqlCommand, SqlResponse } from "$sql/types";
import { ItemReservation } from "@models";
import { translateReservation } from "./reservation.orm";
import { uuid } from "@internal/types";

export const translateItemReservation = (
  raw: SqlResponse
): ItemReservation.Entity => ({
  ...translateReservation(raw),
  itemId: raw.item_id,
  count: raw.count,
});

export const createItemReservation = (
  model: ItemReservation.Model
): SqlCommand => `
  insert into item_reservation(start, "end", item_id, count)
  values ('${model.start}',
          '${model.end}',
          '${model.itemId}',
          '${model.count}');
`;

export const updateItemReservation = (
  id: uuid,
  model: ItemReservation.Model
): SqlCommand => `
  update item_reservation
  set start   = '${model.start}',
      "end"   = '${model.end}',
      item_id = '${model.itemId}',
      count   = '${model.count}'
  where id = '${id}';
`;

export const deleteItemReservation = (id: uuid): SqlCommand => `
  delete from item_reservation where id = '${id}';
`;
