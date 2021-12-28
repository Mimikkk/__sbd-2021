import { ApiReadProps } from "./types";
import axios from "axios";
import { handleError, handleSuccess } from "./utils";

export const read = <T>({
  url,
  id,
  successMessage,
  errorMessage,
}: ApiReadProps): Promise<T> =>
  axios
    .get<T>(`${url}/${id || ""}`)
    .then(handleSuccess(successMessage))
    .catch(handleError(errorMessage));
