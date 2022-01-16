import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { StatusCode } from "@internal/enums";
export const handleSuccess = (message?: string) => {
  return <T>(response: AxiosResponse<T>) => {
    if (message) toast.success(message);
    return response.data;
  };
};

export const handleError =
  (message?: string) =>
  (error: AxiosError | any): never => {
    if (error.response.status === StatusCode.Teapot) {
      toast.warn(message || error.response.data.message);
    }
    if (message || error.message) toast.error(message || error.message);
    throw error;
  };
