import { Court } from 'Frontend/shared/models';
import { uuid } from 'Frontend/shared/types';
import { servicant } from './servicant';

const url = '/courts';

export const CourtService = {
  create: (item: Court.Model) =>
    servicant.create({ url, item, successMessage: 'super' }),

  readAll: () => servicant.read<Court.Model[]>({ url }),

  update: (id: uuid, item: Court.Model) =>
    servicant.update<Court.Model>({ url, item, id }),

  delete: (id: uuid) => servicant.delete({ url, id }),
};
