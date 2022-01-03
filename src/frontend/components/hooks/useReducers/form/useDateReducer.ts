import { useReducer } from "react";
import { Action, Type } from "./actions";

const reducer = (current: Date, action: Action) => {
  switch (action.type) {
    case Type.SetDate:
      return action.payload;
    default:
      throw new Error("Unknown action type");
  }
};

export const useDateReducer = () => {
  const [date, dispatch] = useReducer(reducer, new Date());

  const setDate = (payload: Date) => dispatch({ type: Type.SetDate, payload });
  return { date, setDate };
};
