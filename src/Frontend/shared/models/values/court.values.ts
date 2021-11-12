import { Court } from 'shared/models';
import faker from 'faker';

export const mockCourt = (initial?: Partial<Court.Model>): Court.Entity => ({
  id: faker.datatype.uuid(),
  updatedAt: '',
  createdAt: '',
  floor: faker.lorem.word(),
  isCovered: faker.datatype.boolean(),
  isUnderMaintenance: faker.datatype.boolean(),
  ...initial,
});
