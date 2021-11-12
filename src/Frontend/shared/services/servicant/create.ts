import { ApiCreateProps } from 'shared/services/servicant/types';
import axios from 'axios';
import { handleError, handleSuccess } from 'shared/services/servicant/utils';

export const create = async <T>({
  url,
  item,
  errorMessage,
  successMessage,
}: ApiCreateProps<T>) =>
  axios
    .post(url, item)
    .then(handleSuccess(successMessage))
    .catch(handleError(errorMessage));
