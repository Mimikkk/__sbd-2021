import { range } from 'lodash-es';

export const courtHours = range(7, 23);

export const courtDates = (date: Date) =>
  courtHours.reduce<Date[]>((acc, hour) => {
    acc.push(new Date(date.setHours(hour, 0, 0, 0)));
    if (hour !== 22) acc.push(new Date(date.setHours(hour, 30, 0, 0)));
    return acc;
  }, []);

export const initialContext = {};
