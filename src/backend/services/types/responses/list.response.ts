import { BaseModel } from "@models";
import { RequestStatus } from "@internal/enums";
import {
  ResponseFailed,
  ResponseIdle,
  ResponseLoading,
  ResponseSuccess,
} from "./base.response";

export interface ListResponse<T> {
  items: T[];
  total: number;
}

export interface ListStateIdle<Item extends BaseModel> extends ResponseIdle {
  items: Item[];
  total: 0;
}
export interface ListStateLoading<Item extends BaseModel>
  extends ResponseLoading {
  items: Item[];
  total: 0;
}
export interface ListStateFailed<Item extends BaseModel>
  extends ResponseFailed {
  items: Item[];
  total: 0;
}

export interface ListStateSuccess<Item extends BaseModel>
  extends ResponseSuccess {
  items: Item[];
  total: number;
}

export type ListState<Item extends BaseModel> =
  | ListStateIdle<Item>
  | ListStateLoading<Item>
  | ListStateFailed<Item>
  | ListStateSuccess<Item>;

export const listInitial = <T extends BaseModel>(): ListStateIdle<T> => ({
  items: [],
  total: 0,
  status: RequestStatus.Idle,
});
export const listError = <T extends BaseModel>(
  error: Error
): ListStateFailed<T> => ({
  items: [],
  total: 0,
  status: RequestStatus.Failed,
  error: error,
});
export const listSuccess = <T extends BaseModel>(
  response: ListResponse<T>
): ListStateSuccess<T> => ({
  ...response,
  status: RequestStatus.Success,
});

export const listLoading = <T extends BaseModel>(): ListStateLoading<T> => ({
  items: [],
  total: 0,
  status: RequestStatus.Loading,
});
