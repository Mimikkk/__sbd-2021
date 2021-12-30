import { BaseModel } from "@models";
import { Nullable } from "@internal/types";

export module Person {
  export interface Model {
    name: string;
    surname: string;
    birthdate: Date;
    address: string;
    phone: string;
    email: Nullable<string>;
  }

  export interface Entity extends BaseModel, Model {}
}
