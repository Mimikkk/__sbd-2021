import { ApiCreateProps } from "./types";
import axios from "axios";
import { handleError, handleSuccess } from "./utils";

export const create = <T>({
  url,
  item,
  errorMessage,
  successMessage,
}: ApiCreateProps<T>): Promise<void> =>
  axios
    .post(url, item)
    .then(handleSuccess(successMessage))
    .catch(handleError(errorMessage)) as any;
