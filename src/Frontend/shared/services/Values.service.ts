import axios from 'axios';
const ApiUrl = '/api/values'

export const ValuesService = {
  getAll: async () => await axios.get(ApiUrl),
  get: async (n: number) => await axios.post<number, number>(`${ApiUrl}/${n}`, n),
}