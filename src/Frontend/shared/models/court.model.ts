import { BaseModel } from 'Frontend/shared/models';

export module Court {
  export interface Model {
    floor: string;
    isCovered: boolean;
    isUnderMaintenance: boolean;
  }

  export interface Entity extends Model, BaseModel {}
}