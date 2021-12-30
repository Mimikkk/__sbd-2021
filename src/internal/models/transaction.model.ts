import { uuid } from "@internal/types";
import { BaseModel } from "@models";

export module Transaction {
  export interface Model {
    cost: number;
    clientId: uuid;
    discountId?: uuid;
    reservationId: uuid;
  }
  export interface Entity extends BaseModel, Model {}

  export interface Row extends Entity {
    client?: string;
    discount?: string;
    reservation?: string;
  }
}
