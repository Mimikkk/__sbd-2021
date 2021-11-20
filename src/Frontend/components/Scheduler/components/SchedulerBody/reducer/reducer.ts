import { Scheduler } from 'shared/models';
import { Reducer, useReducer } from 'react';
import { Action, InitializeProps, Props, Type } from './types';
import { initial } from './values';
import { createColumns } from '../columns';
import { createRows, groupRows } from '../rows';

const reducer: Reducer<Props, Action> = (current, action) => {
  if (action.type === Type.Initialize) {
    const { courts, reservations } = action.payload;

    const items = createRows(courts, reservations);
    const columns = createColumns(courts, groupRows(items));

    return { courts, items, columns };
  } else if (action.type === Type.Add) {
    return { ...current };
  } else return current;
};

export const useReservations = () => {
  const [{ items, columns }, setState] = useReducer(reducer, initial);

  const initialize = (payload: InitializeProps): void =>
    setState({ type: Type.Initialize, payload });

  const add = (reservation: Scheduler.Reservation): void =>
    setState({ type: Type.Remove, payload: reservation });

  const remove = (reservation: Scheduler.Reservation): void =>
    setState({ type: Type.Add, payload: reservation });

  return { items, columns, add, remove, initialize } as const;
};
