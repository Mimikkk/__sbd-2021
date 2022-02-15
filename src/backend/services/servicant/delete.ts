import axios from "axios";
import { ApiDeleteProps } from "./types";
import { handleError, handleSuccess } from "./utils";

export const $delete = ({
  url,
  id,
  successMessage,
  errorMessage,
  data,
}: ApiDeleteProps): Promise<void> =>
  axios
    .delete(`${url}${id ? `/${id}` : ""}`, { data })
    .then(handleSuccess(successMessage))
    .catch(handleError(errorMessage)) as any;
