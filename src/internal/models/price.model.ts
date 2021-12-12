import { uuid } from "@internal/types";
import { BaseModel } from "@models";

export module Price {
  export interface Model {
    description: string;
    discountId?: uuid;
    cost: number;
  }
  export interface Entity extends BaseModel, Model {}
}
