import { ApiReadProps } from "./types";
import axios from "axios";
import { handleError, handleSuccess } from "./utils";
import { compact } from "lodash";

const applyParams = (...params: string[]) =>
  compact(params).length > 0 ? `?${params.join("&")}` : "";

const encodeFilters = <T extends object>(filters?: T) => {
  return (
    (filters &&
      Object.keys(filters).filter((filter) => filters[filter as keyof T])
        .length > 0 &&
      `filters=${btoa(JSON.stringify(filters))}`) ||
    ""
  );
};

export const read = <T>({
  url,
  id,
  successMessage,
  errorMessage,
  filters,
}: ApiReadProps): Promise<T> => {
  return axios
    .get<T>(`${url}/${id || ""}${applyParams(encodeFilters(filters))}`)
    .then(handleSuccess(successMessage))
    .catch(handleError(errorMessage));
};
