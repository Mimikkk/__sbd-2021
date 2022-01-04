import { Court } from "@internal/models";
import { createContext, useContext } from "react";
import { RequestStatus } from "@internal/enums";
import { UseDateProps } from "shared/hooks/useDate";

export interface SchedulerContextState {
  courts: Court.Entity[];
  status: RequestStatus;
  day: UseDateProps;
}
export const initial: SchedulerContextState = {
  status: RequestStatus.Idle,
  courts: [],
  day: {
    date: new Date(),
    setDate: () => {},
    moveForward: () => {},
    moveBackward: () => {},
  },
};

export const SchedulerContext = createContext<SchedulerContextState>(initial);
export const useSchedulerContext = () => useContext(SchedulerContext);
