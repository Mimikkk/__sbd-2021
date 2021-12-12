import { SqlResponse } from "$sql/types";
import { BaseModel } from "@models";

export const translateFootprint = (raw: SqlResponse): BaseModel => ({
  id: raw.id,
  createdAt: new Date(raw.created_at),
  updatedAt: raw.updated_at && new Date(raw.updated_at),
});
