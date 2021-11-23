import { Court } from "@models";
import faker from "faker";

export const mockCourt = (initial?: Partial<Court.Model>): Court.Entity => ({
  id: faker.datatype.uuid(),
  createdAt: faker.datatype.datetime().toDateString(),
  updatedAt: null,
  name: faker.lorem.word(),
  floor: faker.lorem.word(),
  isCovered: faker.datatype.boolean(),
  isUnderMaintenance: faker.datatype.boolean(),
  ...initial,
});
