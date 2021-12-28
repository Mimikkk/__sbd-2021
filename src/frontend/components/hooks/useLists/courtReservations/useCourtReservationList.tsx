import { useList } from "shared/hooks";
import { columns } from "./columns";
import { CourtReservation } from "@models";
import { courtReservationService } from "$/services";

export const useCourtReservationList = () => {
  const [Items, Context] = useList<CourtReservation.Row>(
    courtReservationService.readAll
  );

  return [() => <Items columns={columns} pagination />, Context] as const;
};
