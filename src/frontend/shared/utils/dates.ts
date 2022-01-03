export const isSameOrBefore = (startTime: Date, endTime: Date) =>
  isBefore(startTime, endTime) || isEqual(startTime, endTime);
