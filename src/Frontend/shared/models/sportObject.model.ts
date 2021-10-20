import { BaseModel } from 'Frontend/shared/models';
import { uuid } from 'Frontend/shared/types';

export module SportObject {
  export interface Model {
    floorTypeId: uuid;
  }

  export interface Entity extends Model, BaseModel {}

  export interface Extend<T extends Model = Model> {
    floorType: string;
  }

  export type Extended<T extends Model = Model> = T & Extend<T>;
}
