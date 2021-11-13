import { Court } from 'shared/models/index';
import faker from 'faker';

export const mockCourt = (initial?: Partial<Court.Model>): Court.Entity => ({
  id: faker.datatype.uuid(),
  name: faker.lorem.word(),
  updatedAt: '',
  createdAt: '',
  floor: faker.lorem.word(),
  isCovered: faker.datatype.boolean(),
  isUnderMaintenance: faker.datatype.boolean(),
  ...initial,
});
