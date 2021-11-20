import { Court, Scheduler } from 'shared/models';
import { ActionType } from 'shared/types';

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

export interface ReservationGroups
  extends Record<number, Record<number, Scheduler.Row>> {}

export interface Props {
  courts: Court.Entity[];
  items: Scheduler.Row[];
  columns: Scheduler.Column[];
}
