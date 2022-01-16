import { BaseModel } from "@models";
import { Nullable, uuid } from "@internal/types";

export const translate = <T extends BaseModel>(
  id: Nullable<uuid>,
  items: T[]
): T => items.find((i) => i.id === id)!;

