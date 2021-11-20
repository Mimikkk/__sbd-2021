import { ApiReadProps } from './types';
import axios from 'axios';
import { handleError, handleSuccess } from './utils';

export const read = async <T>({
  url,
  id,
  successMessage,
  errorMessage,
}: ApiReadProps) =>
  axios
    .get<T>(`${url}/${id || ''}`)
    .then(handleSuccess(successMessage))
    .catch(handleError(errorMessage));
