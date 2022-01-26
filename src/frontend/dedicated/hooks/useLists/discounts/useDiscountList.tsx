import { useList } from "shared/hooks";
import { columns } from "./columns";
import { Discount } from "@models";
import { discountService } from "$/services";

export const useDiscountList = () => {
  const [Items, Context] = useList<Discount.Row>(discountService.readAll);

  return [() => <Items columns={columns} pagination />, Context] as const;
};
