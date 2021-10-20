import { uuid } from 'Frontend/shared/types';

export interface BaseModel {
  id: uuid;
  createdAt: string;
  updatedAt: string;
}
