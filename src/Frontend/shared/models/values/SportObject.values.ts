import { SportObject } from 'Frontend/shared/models';

export const createSportObject = (
  initial: Partial<SportObject.Model>,
): SportObject.Model => {
  return ({
    floorTypeId:'',
    ...initial,
  });
};
