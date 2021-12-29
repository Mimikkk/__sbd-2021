import { Person } from "@models";

export module Employee {
  export interface Model extends Person.Model {
    isTeacher: boolean;
    payroll: number;
    bankAccount: string;
  }

  export interface Entity extends Person.Entity, Model {}

  export interface Row extends Entity {}
}
