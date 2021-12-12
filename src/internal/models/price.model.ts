import { uuid } from "@internal/types";
import { BaseModel } from "@models";

export module Price {
  export interface Model {
    cost: number;
    discountId?: uuid;
  }
  export interface Entity extends BaseModel, Model {}
}
