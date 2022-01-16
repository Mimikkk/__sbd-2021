import { Discount } from "@models";
import { formatPrice } from "./formatPrice";

export const formatDiscount = ({ isPercentage, value }: Discount.Entity) =>
  isPercentage ? `${value}%` : formatPrice(value);
