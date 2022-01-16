import { useCallback, useMemo } from "react";
import { SchedulerContext } from "./useSchedulerContext";
import { useDate, useListFetch } from "shared/hooks";
import { courtReservationService, courtService } from "@services";
import { concatenateStatuses } from "@internal/enums";

export const useScheduler = () => {
  const {
    list: { status: courtsStatus, items: courts },
  } = useListFetch(courtService.readAll);

  const {
    list: { status: reservationsStatus, items: reservations },
    refresh,
  } = useListFetch(courtReservationService.readAll);

  const day = useDate();
  const status = useMemo(
    () => concatenateStatuses(courtsStatus, reservationsStatus),
    [courtsStatus, reservationsStatus]
  );

  const SchedulerProvider = useCallback(
    ({ children }) => (
      <SchedulerContext.Provider
        value={{ courts, reservations, status, day, refresh }}
      >
        {children}
      </SchedulerContext.Provider>
    ),
    [courts, status, day]
  );

  return [SchedulerProvider] as const;
};
