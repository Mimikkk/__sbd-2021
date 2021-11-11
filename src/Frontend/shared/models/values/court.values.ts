import { Court } from 'shared/models';

export const createCourt = (initial: Partial<Court.Model>): Court.Model => {
  return {
    ...initial,
  } as Court.Model;
};
