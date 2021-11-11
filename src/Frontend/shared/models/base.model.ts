import { uuid } from 'shared/types';

export interface BaseModel {
  id: uuid;
  createdAt: string;
  updatedAt: string;
}
