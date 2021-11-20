import { Enum } from "./enum";

export interface ActionType<Action extends Enum, Payload = undefined> {
  type: Action;
  payload: Payload;
}
