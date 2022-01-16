import { Price } from "@models";
import { footprintTranslation } from "./footprint.orm";
import {
  createDelete,
  createTranslation,
  createUpdate,
  num,
  TranslationMap,
  str,
  SqlMap,
  createCreate,
} from "$sql/orm/utils";
import { identity } from "lodash";

export const priceTranslation: TranslationMap<Price.Model> = {
  cost: num,
  name: str,
  isItem: str,
};
export const priceSql: SqlMap<Price.Entity> = {
  ...footprintTranslation,
  cost: identity,
  name: identity,
  isItem: identity,
};
const table = "price";

export const translatePrice = createTranslation(priceSql);
export const createPrice = createCreate(table, priceTranslation);
export const updatePrice = createUpdate(table, priceTranslation);
export const deletePrice = createDelete(table);
