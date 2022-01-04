import { Court } from "@internal/models";
import { createContext, useContext } from "react";
import { RequestStatus } from "@internal/enums";

export interface SchedulerContextState {
  courts: Court.Entity[];
  status: RequestStatus;
}
export const initial: SchedulerContextState = {
  status: RequestStatus.Idle,
  courts: [],
};

export const SchedulerContext = createContext<SchedulerContextState>(initial);
export const useSchedulerContext = () => useContext(SchedulerContext);
