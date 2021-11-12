import { BaseModel } from 'shared/models';

export module Court {
  export interface Model {
    floor: string;
    isCovered: boolean;
    isUnderMaintenance: boolean;
  }

  export interface Entity extends Model, BaseModel {
  }
  export type Row = Model & Pick<BaseModel, 'id'>
}
