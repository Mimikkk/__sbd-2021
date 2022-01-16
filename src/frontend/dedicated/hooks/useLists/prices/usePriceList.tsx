import { useList } from "shared/hooks";
import { columns } from "./columns";
import { Price } from "@models";
import { priceService } from "$/services";

export const usePriceList = () => {
  const [Items, Context] = useList<Price.Row>(priceService.readAll);

  return [() => <Items columns={columns} pagination />, Context] as const;
};
