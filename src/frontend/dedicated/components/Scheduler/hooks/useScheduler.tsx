import { useCallback, useMemo } from "react";
import { SchedulerContext } from "./useSchedulerContext";
import { useDate, useListFetch } from "shared/hooks";
import {
  courtReservationService,
  courtService,
  employeeService,
} from "@services";
import { isFailed, isLoading, isSuccess } from "shared/utils/requests";
import { RequestStatus } from "@internal/enums";
import { each } from "lodash";

export const useScheduler = () => {
  const {
    list: { status: courtsStatus, items: courts },
  } = useListFetch(courtService.readAll);

  const {
    list: { status: reservationsStatus, items: reservations },
    refresh,
  } = useListFetch(courtReservationService.readAll);
  const {
    list: { status: employeesStatus, items: employees },
  } = useListFetch(employeeService.readAll);

  each(reservations, (reservation) => {
    reservation.start = new Date(reservation.start);
    reservation.end = new Date(reservation.end);
  });

  const day = useDate();
  const status = useMemo(() => {
    const statuses = [courtsStatus, reservationsStatus];
    if (statuses.some(isFailed)) return RequestStatus.Failed;
    if (statuses.some(isLoading)) return RequestStatus.Loading;
    if (statuses.every(isSuccess)) return RequestStatus.Success;
    return RequestStatus.Idle;
  }, [courtsStatus, reservationsStatus, employeesStatus]);

  const SchedulerProvider = useCallback(
    ({ children }) => (
      <SchedulerContext.Provider
        value={{ courts, reservations, employees, status, day, refresh }}
      >
        {children}
      </SchedulerContext.Provider>
    ),
    [courts, status, day]
  );

  return [SchedulerProvider] as const;
};
