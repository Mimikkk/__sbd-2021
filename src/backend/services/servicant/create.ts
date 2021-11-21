import { ApiCreateProps } from "./types";
import axios from "axios";
import { handleError, handleSuccess } from "./utils";

export const create = async <T>({
  url,
  item,
  errorMessage,
  successMessage,
}: ApiCreateProps<T>): Promise<void> => {
  await axios
    .post(url, item)
    .then(handleSuccess(successMessage))
    .catch(handleError(errorMessage));
};
