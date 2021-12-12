import { SqlResponse } from "$sql/types";
import { CourtReservation } from "@models";
import { translateReservation } from "./reservation.orm";

export const translateCourtReservation = (
  raw: SqlResponse
): CourtReservation.Entity => ({
  ...translateReservation(raw),
  teacherId: raw.teacher_id,
  isLesson: raw.is_lesson,
  courtId: raw.court_id,
});
