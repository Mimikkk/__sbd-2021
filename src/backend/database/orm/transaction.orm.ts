import { Transaction } from "@models";
import { footprintTranslation } from "./footprint.orm";
import {
  createCreate,
  createTranslation,
  createUpdate,
  createDelete,
  nil,
  num,
  SqlMap,
  str,
  TranslationMap,
} from "$sql/orm/utils";
import { identity } from "lodash";

const sql: SqlMap<Transaction.Entity> = {
  ...footprintTranslation,
  cost: identity,
  clientId: identity,
  discountId: identity,
  reservationId: identity,
};
const translations: TranslationMap<Transaction.Model> = {
  cost: num,
  reservationId: str,
  clientId: str,
  discountId: nil,
};
const table = "transaction";

export const translateTransaction = createTranslation(sql);
export const createTransaction = createCreate(table, translations);
export const updateTransaction = createUpdate(table, translations);
export const deleteTransaction = createDelete(table);
