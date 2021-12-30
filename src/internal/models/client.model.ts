import { Person } from "@models";

export module Client {
  export interface Model extends Person.Model {
    isPermanent: boolean;
  }

  export interface Entity extends Person.Entity, Model {}

  export interface Row extends Entity {}
}
