import { BaseModel } from "@models";

export module Discount {
  export interface Model {
    name: string;
    value: number;
    isPercentage: boolean;
    description: string;
  }

  export interface Entity extends BaseModel, Model {}

  export interface Row extends Entity {}
}
