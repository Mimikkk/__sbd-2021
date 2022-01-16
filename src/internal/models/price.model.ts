import { BaseModel } from "@models";

export module Price {
  export interface Model {
    name: string;
    cost: number;
    isItem: boolean;
  }
  export interface Entity extends BaseModel, Model {}

  export interface Row extends Entity {}
}
