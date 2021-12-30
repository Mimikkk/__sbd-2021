import { BaseModel } from "@models/base.model";

export module Item {
  export interface Model {
    name: string;
    count: number;
    description?: string;
  }
  export interface Entity extends BaseModel, Model {}

  export interface Row extends Entity {}
}
