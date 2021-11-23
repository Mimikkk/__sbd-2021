import { useReducer } from "react";

export const useToggle = (initial?: boolean) =>
  useReducer((state) => !state, initial || false);
