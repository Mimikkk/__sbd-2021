import { ActionType } from 'shared/types';

export enum Type {
  SetDate,
  MoveBackward,
  MoveForward,
}

type SetDateAction = ActionType<Type.SetDate, Date>;
type MoveDayAction = ActionType<Type.MoveForward | Type.MoveBackward>;

export type Action = SetDateAction | MoveDayAction;
