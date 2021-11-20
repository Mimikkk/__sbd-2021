import faker from 'faker';

export const schedulerService = {
  getCourts: () =>
    Promise.resolve(() => {
      return [
        faker.datatype.uuid(),
        faker.datatype.uuid(),
        faker.datatype.uuid(),
      ];
    }),
};
