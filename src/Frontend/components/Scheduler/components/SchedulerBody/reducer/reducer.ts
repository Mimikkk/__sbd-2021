import { Scheduler } from 'shared/models';
import { Reducer, useReducer } from 'react';
import { Action, InitializeProps, Props, Type } from './types';
import { initial } from './values';
import { createColumns } from '../columns';
import { createRows, groupReservations } from '../rows';
import { extend, merge } from 'lodash';

const reducer: Reducer<Props, Action> = (state, action) => {
  if (action.type === Type.Initialize) {
    const { courts, reservations } = action.payload;

    const items = createRows(courts, reservations);
    const columns = createColumns(courts, groupReservations(reservations));

    return { courts, items, columns, reservations };
  } else if (action.type === Type.Add) {
    const reservation = action.payload;
    const { courts, reservations } = state;

    merge(reservations, { [reservations.length]: reservation });

    const items = createRows(courts, reservations);
    const columns = createColumns(courts, groupReservations(reservations));
    return { ...state, items, columns };
  } else return state;
};

export const useReservations = () => {
  const [{ items, columns }, setState] = useReducer(reducer, initial);

  const initialize = (payload: InitializeProps): void =>
    setState({ type: Type.Initialize, payload });

  const add = (reservation: Scheduler.Reservation): void =>
    setState({ type: Type.Add, payload: reservation });

  const remove = (reservation: Scheduler.Reservation): void =>
    setState({ type: Type.Remove, payload: reservation });

  extend(Scheduler.initialRef, { add, remove });

  return { items, columns, add, remove, initialize } as const;
};
