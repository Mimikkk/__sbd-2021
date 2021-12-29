import { Discount } from "@models";
import { footprintTranslation } from "./footprint.orm";
import {
  createCreate,
  createDelete,
  createTranslation,
  createUpdate,
  num,
  SqlMap,
  str,
  TranslationMap,
} from "$sql/orm/utils";
import { identity } from "lodash";

const sql: SqlMap<Discount.Entity> = {
  ...footprintTranslation,
  name: identity,
  value: identity,
  isPercentage: identity,
  description: identity,
};
const translations: TranslationMap<Discount.Model> = {
  name: str,
  isPercentage: num,
  value: num,
  description: str,
};
const table = "discount";

export const translateDiscount = createTranslation(sql);
export const createDiscount = createCreate(table, translations);
export const updateDiscount = createUpdate(table, translations);
export const deleteDiscount = createDelete(table);
