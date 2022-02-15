import { uuid } from "@internal/types";
export interface ApiProps {
  url: string;
  errorMessage?: string;
  successMessage?: string;
}

export interface ApiDeleteProps extends ApiProps {
  id?: uuid;
  data?: any;
}

export interface ApiReadProps extends ApiProps {
  id?: uuid;
  filters?: object;
}

export interface ApiUpdateProps<T> extends ApiProps {
  item: T;
  id: uuid;
}

export interface ApiCreateProps<T> extends ApiProps {
  item: T;
}
