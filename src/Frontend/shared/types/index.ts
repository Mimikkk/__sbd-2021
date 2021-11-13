export * from './uuid';
export * from './nullable';

export type Enum = number | string;

export interface ActionType<Action extends Enum, Payload = undefined> {
  type: Action;
  payload: Payload;
}
