import { Scheduler } from "@models";
import { Reducer, useReducer } from "react";
import { Action, InitializeProps, Props, Type } from "./types";
import { initial } from "./values";
import { createColumns } from "../columns";
import { createRows, groupReservations } from "../rows";
import { extend, merge } from "lodash";
import Reservation = Scheduler.Reservation;

const handleInitialization = ({ courts, reservations }: InitializeProps) => {
  const items = createRows(courts, reservations);
  const columns = createColumns(courts, groupReservations(reservations));

  return { courts, items, columns, reservations };
};
const handleNewReservation = (state: Props, reservation: Reservation) => {
  const { courts, reservations } = state;

  merge(reservations, { [reservations.length]: reservation });

  const items = createRows(courts, reservations);
  const columns = createColumns(courts, groupReservations(reservations));
  return { ...state, items, columns };
};
const handleReservationRemoval = (state: Props, reservation: Reservation) => {
  const { courts, reservations } = state;

  reservations.splice(
    reservations.findIndex(
      (r) =>
        r.start === reservation.start &&
        r.end === reservation.end &&
        r.court === reservation.court
    ),
    1
  );

  const items = createRows(courts, reservations);
  const columns = createColumns(courts, groupReservations(reservations));
  return { ...state, items, columns };
};

const reducer: Reducer<Props, Action> = (state, action) => {
  switch (action.type) {
    case Type.Initialize:
      return handleInitialization(action.payload);
    case Type.Add:
      return handleNewReservation(state, action.payload);
    case Type.Remove:
      return handleReservationRemoval(state, action.payload);
    default:
      throw Error("Unknown action type");
  }
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

  return { items, columns, initialize } as const;
};
