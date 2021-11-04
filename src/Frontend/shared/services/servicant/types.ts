import { uuid } from 'Frontend/shared/types';
export interface ApiProps {
  url: string;
  errorMessage?: string;
  successMessage?: string;
}

export interface ApiDeleteProps extends ApiProps {
  id: uuid;
}

export interface ApiReadProps extends ApiProps {
  id?: uuid;
}

export interface ApiUpdateProps<T> extends ApiProps {
  item: T;
  id: uuid;
}

export interface ApiCreateProps<T> extends ApiProps {
  item: T;
}
