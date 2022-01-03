import { ActionType } from "@internal/types";

export enum Type {
  SetDate,
}

type SetDateAction = ActionType<Type.SetDate, Date>;

export type Action = SetDateAction;
