import { RequestStatus } from "@internal/enums";

export interface ResponseIdle {
  status: RequestStatus.Idle;
}
export interface ResponseLoading {
  status: RequestStatus.Loading;
}
export interface ResponseFailed {
  status: RequestStatus.Failed;
  error: Error;
}
export interface ResponseSuccess {
  status: RequestStatus.Success;
}
