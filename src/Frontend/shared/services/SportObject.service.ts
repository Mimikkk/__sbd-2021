import axios from 'axios';
import { SportObject } from 'Frontend/shared/models';
import { uuid } from 'Frontend/shared/types';

const ApiUrl =
  'https://cors-anywhere.herokuapp.com/https://localhost:5084/sport-object';

export const SportObjectService = {
  create: async (item: SportObject.Model) => await axios.post(ApiUrl, item),

  readAll: async () => await axios.get<undefined, SportObject.Model[]>(ApiUrl),

  update: async (id: uuid, item: SportObject.Model) =>
    await axios.put<uuid, SportObject.Model>(`${ApiUrl}/${id}`, item),
};
