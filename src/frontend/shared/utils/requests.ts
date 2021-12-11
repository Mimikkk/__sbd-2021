import { RequestStatus } from "@internal/enums";

export const isLoading = (status: RequestStatus) => {
  return status == RequestStatus.Loading;
};
