import { Discount } from "@models";
import { Option } from "./types";
import { uuid } from "@internal/types";
import { formatDiscount } from "shared/utils/formats/formatDiscount";

export const discountsToOptions = (
  discounts: Discount.Entity[]
): Option<uuid>[] => discounts.map(discountToOption);

export const discountToOption = (discount: Discount.Entity): Option<uuid> => ({
  value: discount.id,
  label: `${discount.name} - ${formatDiscount(discount)}`,
});
