import { ApiUpdateProps } from './types';
import axios from 'axios';
import { handleError, handleSuccess } from './utils';

export const update = async <T>({
  url,
  id,
  item,
  successMessage,
  errorMessage,
}: ApiUpdateProps<T>) =>
  axios
    .put(`${url}/${id || ''}`, item)
    .then(handleSuccess(successMessage))
    .catch(handleError(errorMessage));
