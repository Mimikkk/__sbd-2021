import { SqlResponse } from "$sql/types";
import { Discount } from "@models";
import { translateFootprint } from "./footprint.orm";

export const translateDiscount = (raw: SqlResponse): Discount.Entity => ({
  ...translateFootprint(raw),
  name: raw.name,
  value: raw.value,
  isPercentage: raw.is_percentage,
});
