import { Court, CourtReservation } from "@internal/models";
import { createContext, useContext } from "react";
import { RequestStatus } from "@internal/enums";
import { UseDateProps } from "shared/hooks/useDate";
import { noop } from "lodash";

export interface SchedulerContextState {
  courts: Court.Entity[];
  reservations: CourtReservation.Entity[];
  status: RequestStatus;
  day: UseDateProps;
  refresh: () => void;
}

const initial: SchedulerContextState = {
  status: RequestStatus.Idle,
  courts: [],
  reservations: [],
  day: {
    date: new Date(),
    setDate: noop,
    moveForward: noop,
    moveBackward: noop,
  },
  refresh: noop,
};

export const SchedulerContext = createContext<SchedulerContextState>(initial);
export const useSchedulerContext = () => useContext(SchedulerContext);
