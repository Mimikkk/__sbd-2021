import { RequestStatus } from "@internal/enums";

export const isLoading = (status: RequestStatus) =>
  status == RequestStatus.Loading;

export const isSuccess = (status: RequestStatus) =>
  status == RequestStatus.Success;
