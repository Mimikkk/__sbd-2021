import { Court } from 'shared/models';
import { uuid } from 'shared/types';
import { servicant } from 'shared/services/servicant';

const url = 'api/v2/courts';

export const courtService = {
  create: (item: Court.Model) =>
    servicant.create({ url, item, successMessage: 'super' }),

  readAll: () => servicant.read<Court.Model[]>({ url }),

  update: (id: uuid, item: Court.Model) =>
    servicant.update<Court.Model>({ url, item, id }),

  delete: (id: uuid) => servicant.delete({ url, id }),
};
