import axios from "axios";
import { ApiDeleteProps } from "./types";
import { handleError, handleSuccess } from "./utils";

export const $delete = ({
  url,
  id,
  successMessage,
  errorMessage,
}: ApiDeleteProps): Promise<void> =>
  axios
    .delete(`${url}/${id || ""}`)
    .then(handleSuccess(successMessage))
    .catch(handleError(errorMessage)) as any;
