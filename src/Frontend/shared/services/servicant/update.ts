import { ApiUpdateProps } from 'shared/services/servicant/types';
import axios from 'axios';
import { handleError, handleSuccess } from 'shared/services/servicant/utils';

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
