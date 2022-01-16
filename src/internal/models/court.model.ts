import { BaseModel } from "./base.model";

export module Court {
  export interface Model {
    name: string;
    floor: string;
    isCovered: boolean;
  }
  export interface Entity extends BaseModel, Model {}
  export interface Row extends Entity {}
}
