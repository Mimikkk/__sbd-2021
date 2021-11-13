import axios from 'axios';
import { ApiDeleteProps } from 'shared/services/servicant/types';
import { handleError, handleSuccess } from 'shared/services/servicant/utils';

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
