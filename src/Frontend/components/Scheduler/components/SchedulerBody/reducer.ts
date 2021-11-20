import { Scheduler } from 'shared/models';
import { ActionType } from 'shared/types';
import { createSchedulerRows } from 'components/Scheduler/components/SchedulerBody/rows';
import { createColumns } from 'components/Scheduler/components/SchedulerBody/columns';
import { groupBy, keyBy, mapValues } from 'lodash';
import { Reducer, useReducer } from 'react';

export interface ReducerProps {
  courts: number;
  items: Scheduler.Row[];
  columns: Scheduler.Column[];
}

export enum Type {
  AddReservation,
  RemoveReservation,
  InitializeReservations,
}

type AddReservation = ActionType<Type.AddReservation, Date>;
type RemoveReservation = ActionType<Type.RemoveReservation, Date>;
type InitializeReservations = ActionType<Type.InitializeReservations, number>;

export type Action =
  | AddReservation
  | RemoveReservation
  | InitializeReservations;

const initial = {
  courts: 0,
  items: [],
  columns: [],
};

const reducer: Reducer<ReducerProps, Action> = (current, action) => {
  const courts = action.payload as number;

  const items = createSchedulerRows(courts, new Date());

  const t_reservations: Scheduler.Reservation[] = [];
  for (let j = 0, start = null, end = null; j < courts; ++j) {
    for (let i = 0; i < items.length; ++i) {
      if (items[i].selected[j]) start !== null ? (end = i) : (start = i);
      else {
        if (start !== null)
          t_reservations.push({
            start: start,
            end: end ?? start,
            court: j,
          });
        start = null;
        end = null;
      }
    }

    if (start !== null)
      t_reservations.push({
        start: start,
        end: end ?? start,
        court: j,
      });
    start = null;
    end = null;
  }

  const reservations = mapValues(groupBy(t_reservations, 'court'), (group) =>
    keyBy(group, 'start'),
  );
  const columns = createColumns(courts, reservations);
  return { items, columns, courts };
};

export const useSchedulerBodyReducer = () => {
  const [{ items, columns }, setState] = useReducer(reducer, initial);

  const initialize = (courts: number) =>
    setState({ type: Type.InitializeReservations, payload: courts });

  return { items, columns, initialize };
};
