import { BaseModel } from "@models";
import { Option } from "./types";
import { uuid } from "@internal/types";

export const itemsToOptions = <T extends { name: string } & BaseModel>(
  items: T[]
): Option<uuid>[] => items.map(itemToOption);

export const itemToOption = <T extends { name: string } & BaseModel>(
  item: T
): Option<uuid> => ({
  value: item.id,
  label: item.name,
});
