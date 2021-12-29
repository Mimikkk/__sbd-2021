import { BaseModel } from "@models";

export module Price {
  export interface Model {
    description: string;
    cost: number;
  }
  export interface Entity extends BaseModel, Model {}

  export interface Row extends Entity {}
}
