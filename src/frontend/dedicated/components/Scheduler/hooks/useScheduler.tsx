import { useCallback } from "react";
import { initial, SchedulerContext } from "./useSchedulerContext";
import { useDate, useListFetch } from "shared/hooks";
import { courtService } from "@services";

export const useScheduler = () => {
  const {
    list: { status, items: courts },
  } = useListFetch(courtService.readAll);

  const day = useDate();

  const SchedulerProvider = useCallback(
    ({ children }) => (
      <SchedulerContext.Provider value={{ ...initial, courts, status, day }}>
        {children}
      </SchedulerContext.Provider>
    ),
    [courts, status, day]
  );

  return [SchedulerProvider] as const;
};
