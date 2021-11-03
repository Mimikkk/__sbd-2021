import axios from 'axios';

export const servicant = {
  post: axios.post,
  put: axios.put,
  get: axios.get,
  delete: axios.delete,
};
