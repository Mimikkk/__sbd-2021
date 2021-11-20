import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
export const handleSuccess =
  (message?: string) =>
  <T>(response: AxiosResponse<T>) => {
    if (message) toast.success(message);
    return response.data;
  };

export const handleError =
  (message?: string) =>
  (error: AxiosError): never => {
    if (message || error.message) toast.error(message || error.message);
    throw error;
  };
