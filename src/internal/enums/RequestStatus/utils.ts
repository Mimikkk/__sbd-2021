import { RequestStatus } from "@internal/enums";
import { isFailed, isLoading, isSuccess } from "shared/utils/requests";

export const concatenateStatuses = (
  ...statuses: RequestStatus[]
): RequestStatus => {
  if (statuses.some(isFailed)) return RequestStatus.Failed;
  if (statuses.some(isLoading)) return RequestStatus.Loading;
  if (statuses.every(isSuccess)) return RequestStatus.Success;
  return RequestStatus.Idle;
};
