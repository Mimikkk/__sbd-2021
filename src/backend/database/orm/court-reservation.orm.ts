import { CourtReservation } from "@models";
import { reservationTranslation } from "./reservation.orm";
import {
  createCreate,
  createDelete,
  createUpdate,
  nil,
  str,
  TranslationMap,
  SqlMap,
  createTranslation,
} from "$sql/orm/utils";
import { identity } from "lodash";

const sql: SqlMap<CourtReservation.Entity> = {
  ...reservationTranslation,
  teacherId: identity,
  courtId: identity,
};
const translations: TranslationMap<CourtReservation.Model> = {
  start: str,
  end: str,
  courtId: str,
  teacherId: nil,
};
const table = "court_reservation";

export const translateCourtReservation = createTranslation(sql);
export const createCourtReservation = createCreate(table, translations);
export const updateCourtReservation = createUpdate(table, translations);
export const deleteCourtReservation = createDelete(table);
