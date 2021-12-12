import { SqlResponse } from "$sql/types";
import { Price } from "@models";
import { translateFootprint } from "./footprint.orm";

export const translatePrice = (raw: SqlResponse): Price.Entity => ({
  ...translateFootprint(raw),
  discountId: raw.discount_id,
  cost: raw.cost,
});
