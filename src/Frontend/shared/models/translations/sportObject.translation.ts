import { SportObject } from 'Frontend/shared/models';

export const translateSportObject = (
  item: SportObject.Model,
): SportObject.Extended => ({
  ...item,
  floorType: 'translated',
});
