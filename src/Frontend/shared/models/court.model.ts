import { BaseModel } from 'shared/models/index';

export module Court {
  export interface Model {
    name: string;
    floor: string;
    isCovered: boolean;
    isUnderMaintenance: boolean;
  }

  export interface Entity extends Model, BaseModel {}
  export type Row = Model & Pick<BaseModel, 'id'>;
}
