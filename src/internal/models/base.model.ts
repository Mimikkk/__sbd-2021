import { Nullable, uuid } from "@internal/types";

export interface BaseModel {
  id: uuid;
  createdAt: string;
  updatedAt: Nullable<string>;
}
