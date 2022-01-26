import { range } from "lodash";

const min = 7;
const max = 22;
const courtHours = range(min, max + 1);
const reducer = (day: Date) => (hours: Date[], hour: number) => {
  hours.push(new Date(day.setHours(hour, 0, 0, 0)));
  if (hour !== max) hours.push(new Date(day.setHours(hour, 30, 0, 0)));
  return hours;
};

export const createCourtDates = (day: Date): Date[] =>
  courtHours.reduce(reducer(day), []);
