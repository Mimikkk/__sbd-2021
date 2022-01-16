import { BaseModel } from "@models";
import { Nullable, uuid } from "@internal/types";

export const translate = <T extends BaseModel>(
  id: Nullable<uuid>,
  items: T[] | Record<uuid, T>
): Nullable<T> =>
  (items instanceof Array ? items.find((i) => i.id === id) : items[id!]) ||
  null;
