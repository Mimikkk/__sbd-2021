import { object, Schema, date, string, boolean } from 'yup';
import { CourtReservation, Employee } from '@models';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { courtReservationService, courtService } from '@services';

const isSameOrBefore = (startTime: moment.MomentInput, endTime: moment.MomentInput) => {
  return moment(startTime, 'HH:mm').isSameOrBefore(moment(endTime, 'HH:mm'));
}


export const courtReservationSchema: Schema<CourtReservation.Model> = object<CourtReservation.Model>({
  courtId: string().required(),
  start: date().required().test(
    'not empty',
    'Start time cant be empty',
    function(value) {
      return !!value;
    }).test(
    "start_time_test",
    "Start time must be before end time",
    function(value) {
      const { end } = this.parent;
      return isSameOrBefore(value, end);
    }
  ),
  end: date().required(),
  teacherId: string(),
}).defined();
