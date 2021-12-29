import { Item } from "@models";
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

const table = "item";
const translations: TranslationMap<Item.Model> = {
  name: str,
  count: num,
  description: str,
};
const sql: SqlMap<Item.Entity> = {
  ...footprintTranslation,
  name: identity,
  description: identity,
  count: identity,
};

export const translateItem = createTranslation(sql);
export const createItem = createCreate(table, translations);
export const updateItem = createUpdate(table, translations);
export const deleteItem = createDelete(table);
