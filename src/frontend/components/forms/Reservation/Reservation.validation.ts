import { object, Schema, date, string, boolean } from 'yup';
import { CourtReservation} from '@models';

export const courtReservationSchema: Schema<CourtReservation.Model> = object<CourtReservation.Model>({
  courtId: string().required(),
  start: date().required(),
  end: date().required(),
  teacherId: string().required(),
  isLesson: boolean()
}).defined();
