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
      return undefined as never;
    }
    if (error.response.status === StatusCode.NotFound) {
      toast.error("Resource no longer exists");
      return undefined as never;
    }

    if (message || error.message) toast.error(message || error.message);
    throw error;
  };
