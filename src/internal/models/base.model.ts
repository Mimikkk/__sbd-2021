import { uuid } from '@internal/types';

export interface BaseModel {
  id: uuid;
  createdAt: string;
  updatedAt: string;
}
