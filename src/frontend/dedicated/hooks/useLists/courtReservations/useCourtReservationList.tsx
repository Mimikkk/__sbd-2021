import { useList } from "shared/hooks";
import { getColumns } from "./columns";
import { Court, CourtReservation, Employee } from "@models";
import {
  courtReservationService,
  courtService,
  employeeService,
} from "$/services";
import { useEffect, useState } from "react";
import { uuid } from "@internal/types";
import { keyBy } from "lodash";

export const useCourtReservationList = () => {
  const [Items, Context] = useList<CourtReservation.Row>(
    courtReservationService.readAll
  );

  const [courts, setCourts] = useState<Record<uuid, Court.Entity>>({});
  useEffect(() => {
    courtService.readAll().then(({ items }) => setCourts(keyBy(items, "id")));
  }, []);

  const [teachers, setTeachers] = useState<Record<uuid, Employee.Entity>>({});
  useEffect(() => {
    employeeService
      .readAll()
      .then(({ items }) => setTeachers(keyBy(items, "id")));
  }, []);

  return [
    () => (
      <Items columns={getColumns({ courts, employees: teachers })} pagination />
    ),
    Context,
  ] as const;
};
