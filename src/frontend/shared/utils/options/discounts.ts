import { Discount } from "@models";
import { Option } from "./types";
import { uuid } from "@internal/types";

export const discountsToOptions = (
  discounts: Discount.Entity[]
): Option<uuid>[] => discounts.map(discountToOption);

const formatDiscount = ({ isPercentage, value }: Discount.Entity) =>
  isPercentage ? `${value}%` : `${value.toFixed(2)}zł`;

export const discountToOption = (discount: Discount.Entity): Option<uuid> => ({
  value: discount.id,
  label: `${discount.name} - ${formatDiscount(discount)}`,
});
