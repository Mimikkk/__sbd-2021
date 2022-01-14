import { BaseModel } from "@models";
import { Option } from "shared/components";

export const itemsToOptions = <T extends { name: string } & BaseModel>(
  items: T[]
): Option[] => items.map(itemToOption);

export const itemToOption = <T extends { name: string } & BaseModel>(
  item: T
): Option => ({
  value: item.id,
  label: item.name,
});
