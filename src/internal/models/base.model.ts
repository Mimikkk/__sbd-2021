import { Nullable, uuid } from "@internal/types";

export interface BaseModel {
  id: uuid;
  createdAt: Date;
  updatedAt: Nullable<Date>;
}
