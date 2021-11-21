import { Court } from "@models";
import { SqlResponse } from "$sql/types";

export const translateCourt = (raw: SqlResponse): Court.Entity => ({
  id: raw.id,
  name: raw.id,
  createdAt: raw.created_at,
  updatedAt: raw.updated_at,
  isUnderMaintenance: raw.is_under_maintenance,
  isCovered: raw.is_covered,
  floor: raw.floor,
});
