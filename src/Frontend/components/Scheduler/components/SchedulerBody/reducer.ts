import { Court, Scheduler } from 'shared/models';
import { ActionType } from 'shared/types';
import { createRows } from './rows';
import { createColumns } from './columns';
import { groupBy, keyBy, mapValues } from 'lodash';
import { Reducer, useReducer } from 'react';

enum Type {
  Add,
  Remove,
  Initialize,
}
type Add = ActionType<Type.Add, Scheduler.Reservation>;
type Remove = ActionType<Type.Remove, Scheduler.Reservation>;
interface InitializeProps {
  reservations: Scheduler.Reservation[];
  courts: Court.Entity[];
}
type Initialize = ActionType<Type.Initialize, InitializeProps>;

type Action = Add | Remove | Initialize;

export interface ReservationGroups
  extends Record<number, Record<number, Scheduler.Row>> {}

const groupRows = (rows: Scheduler.Row[]): ReservationGroups =>
  mapValues(groupBy(rows, 'court'), (row) => keyBy(row, 'start'));

interface Props {
  courts: Court.Entity[];
  items: Scheduler.Row[];
  columns: Scheduler.Column[];
}
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

const initial: Props = { courts: [], items: [], columns: [] };

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
