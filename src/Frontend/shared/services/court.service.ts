import { Court } from 'Frontend/shared/models';
import { uuid } from 'Frontend/shared/types';
import { servicant } from './servicant';

const ApiUrl = '/courts';

export const CourtService = {
  create: async (item: Court.Model) => await servicant.post(ApiUrl, item),

  readAll: async () => await servicant.get<undefined, Court.Model[]>(ApiUrl),

  update: async (id: uuid, item: Court.Model) =>
    await servicant.put<uuid, Court.Model>(`${ApiUrl}/${id}`, item),

  delete: async (id: uuid) =>
    await servicant.delete<undefined, undefined, uuid>(`${ApiUrl}/${id}`, {
      data: id,
    }),
};
