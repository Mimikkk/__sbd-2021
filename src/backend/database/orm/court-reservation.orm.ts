import { SqlCommand, SqlResponse } from "$sql/types";
import { CourtReservation } from "@models";
import { translateReservation } from "./reservation.orm";
import { uuid } from "@internal/types";

export const translateCourtReservation = (
  raw: SqlResponse
): CourtReservation.Entity => ({
  ...translateReservation(raw),
  teacherId: raw.teacher_id,
  isLesson: raw.is_lesson,
  courtId: raw.court_id,
});

export const createCourtReservation = (
  model: CourtReservation.Model
): SqlCommand => `
  insert into court_reservation(start, "end", court_id, teacher_id, is_lesson)
  values ('${model.start}',
          '${model.end}',
          '${model.courtId}',
          '${model.teacherId}',
          ${model.isLesson});
`;

export const updateCourtReservation = (
  id: uuid,
  model: CourtReservation.Model
): SqlCommand => `
  update court_reservation
  set start      = '${model.start}',
      "end"      = '${model.end}',
      court_id   = '${model.courtId}',
      teacher_id = '${model.teacherId}',
      is_lesson  = ${model.isLesson}
  where id = '${id}';
`;

export const deleteCourtReservation = (id: uuid): SqlCommand => `
  delete from court_reservation where id = '${id}';
`;
