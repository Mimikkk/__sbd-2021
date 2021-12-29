import { Court } from "@models";
import { footprintTranslation } from "$sql/orm/footprint.orm";
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

const sql: SqlMap<Court.Entity> = {
  ...footprintTranslation,
  name: identity,
  isUnderMaintenance: identity,
  isCovered: identity,
  floor: identity,
};
const translations: TranslationMap<Court.Model> = {
  name: str,
  isUnderMaintenance: num,
  isCovered: num,
  floor: str,
};
const table = "court";

export const translateCourt = createTranslation(sql);
export const createCourt = createCreate(table, translations);
export const updateCourt = createUpdate(table, translations);
export const deleteCourt = createDelete(table);
