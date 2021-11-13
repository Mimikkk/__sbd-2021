import { useReducer } from 'react';
import { addDays } from 'date-fns';

export type Enum = number | string;

export interface ActionType<Action extends Enum, Payload = undefined> {
  type: Action;
  payload: Payload;
}

enum Type {
  SetDate,
  MoveBackward,
  MoveForward,
}

type SetDateAction = ActionType<Type.SetDate, Date>;
type MoveDayAction = ActionType<Type.MoveForward | Type.MoveBackward>;

export type Action = SetDateAction | MoveDayAction;

export const reducer = (current: Date, action: Action) => {
  switch (action.type) {
    case Type.SetDate:
      return action.payload;
    case Type.MoveBackward:
      return addDays(current, -1);
    case Type.MoveForward:
      return addDays(current, 1);
    default:
      throw new Error('Unknown action type');
  }
};

export const useHeaderReducer = () => {
  const [date, dispatch] = useReducer(reducer, new Date());

  const setDate = (payload: Date) => dispatch({ type: Type.SetDate, payload });
  const moveBackward = () =>
    dispatch({ type: Type.MoveBackward, payload: undefined });
  const moveForward = () =>
    dispatch({ type: Type.MoveForward, payload: undefined });

  return { date, setDate, moveBackward, moveForward };
};
