import axios from 'axios';
import { ApiDeleteProps } from './types';
import { handleError, handleSuccess } from './utils';

export const $delete = async ({
  url,
  id,
  successMessage,
  errorMessage,
}: ApiDeleteProps) =>
  axios
    .delete(`${url}/${id || ''}`)
    .then(handleSuccess(successMessage))
    .catch(handleError(errorMessage));