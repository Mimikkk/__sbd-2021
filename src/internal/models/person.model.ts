import { BaseModel } from "@models";

export module Person {
  export interface Model {
    name: string;
    surname: string;
    birthdate: Date;
    address: string;
    phone: string;
    email?: string;
  }

  export interface Entity extends BaseModel, Model {}
}
