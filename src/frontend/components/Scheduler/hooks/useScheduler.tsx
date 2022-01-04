import { useCallback } from "react";
import { SchedulerContext } from "./useSchedulerContext";
import { useDrag, useListFetch } from "shared/hooks";
import { courtService } from "@services";

export const useScheduler = () => {
  const {
    list: { status, items: courts },
  } = useListFetch(courtService.readAll);

  console.log({ courts, status });

  const { Container } = useDrag();

  const SchedulerProvider = useCallback(
    ({ children }) => (
      <SchedulerContext.Provider value={{ courts, status }}>
        {children}
        <Container />
      </SchedulerContext.Provider>
    ),
    [courts, status]
  );

  return [SchedulerProvider] as const;
};
