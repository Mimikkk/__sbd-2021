import { SqlResponse } from "$sql/types";
import { Item } from "@models";
import { translateFootprint } from "./footprint.orm";

export const translateItem = (raw: SqlResponse): Item.Entity => ({
  ...translateFootprint(raw),
  description: raw.description,
  count: raw.count,
  name: raw.name,
});
