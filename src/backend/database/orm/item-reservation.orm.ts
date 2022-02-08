import { ItemReservation } from "@models";
import {
  createCreate,
  createDelete,
  createTranslation,
  createUpdate,
  num,
  str,
  TranslationMap,
  SqlMap,
} from "$sql/orm/utils";
import { identity } from "lodash";
import { reservationTranslation } from "$sql/orm/reservation.orm";

const table = "item_reservation";
const sql: SqlMap<ItemReservation.Entity> = {
  ...reservationTranslation,
  courtReservationId: identity,
  priceId: identity,
  itemId: identity,
  count: identity,
};
const translations: TranslationMap<ItemReservation.Model> = {
  courtReservationId: str,
  itemId: str,
  priceId: str,
  count: num,
  start: str,
  end: str,
};

export const translateItemReservation = createTranslation(sql);
export const createItemReservation = createCreate(table, translations);
export const updateItemReservation = createUpdate(table, translations);
export const deleteItemReservation = createDelete(table);
