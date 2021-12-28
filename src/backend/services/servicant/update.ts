import { ApiUpdateProps } from "./types";
import axios from "axios";
import { handleError, handleSuccess } from "./utils";

export const update = <T>({
  url,
  id,
  item,
  successMessage,
  errorMessage,
}: ApiUpdateProps<T>): Promise<void> =>
  axios
    .put(`${url}/${id || ""}`, item)
    .then(handleSuccess(successMessage))
    .catch(handleError(errorMessage)) as any;
