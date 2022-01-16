import { BaseModel } from "@models";

export module Price {
  export interface Model {
    name: string;
    cost: number;
  }
  export interface Entity extends BaseModel, Model {}

  export interface Row extends Entity {}
}
