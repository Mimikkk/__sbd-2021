import { Court, Scheduler } from "@models";
import { ActionType } from "@internal/types";

export enum Type {
  Add,
  Remove,
  Initialize,
}
export type Add = ActionType<Type.Add, Scheduler.Reservation>;
export type Remove = ActionType<Type.Remove, Scheduler.Reservation>;

export interface InitializeProps {
  reservations: Scheduler.Reservation[];
  courts: Court.Entity[];
}
export type Initialize = ActionType<Type.Initialize, InitializeProps>;

export type Action = Add | Remove | Initialize;

export interface Props {
  courts: Court.Entity[];
  items: Scheduler.Row[];
  columns: Scheduler.Column[];
  reservations: Scheduler.Reservation[];
}
