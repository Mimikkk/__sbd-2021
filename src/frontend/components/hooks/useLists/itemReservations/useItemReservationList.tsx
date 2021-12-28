import { useList } from "shared/hooks";
import { columns } from "./columns";
import { ItemReservation } from "@models";
import { itemReservationService } from "$/services";

export const useItemReservationList = () => {
  const [Items, Context] = useList<ItemReservation.Row>(
    itemReservationService.readAll
  );

  return [() => <Items columns={columns} pagination />, Context] as const;
};
