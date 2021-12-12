import { SqlResponse } from "$sql/types";
import { Price } from "@models";
import { translateFootprint } from "./footprint.orm";

export const translatePrice = (raw: SqlResponse): Price.Entity => ({
  ...translateFootprint(raw),
  description: raw.description,
  cost: raw.cost,
});
