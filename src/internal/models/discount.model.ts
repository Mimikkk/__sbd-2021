import { BaseModel } from "@models";

export module Discount {
  export interface Model {
    name: string;
    value: number;
    isPercentage: boolean;
  }

  export interface Entity extends BaseModel, Model {}
}
