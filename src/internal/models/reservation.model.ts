import { BaseModel } from "@models";

export module Reservation {
  export interface Model {
    start: Date;
    end: Date;
  }
  export interface Entity extends BaseModel, Model {}
}
