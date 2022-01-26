import { BaseModel } from "@models";
export * from "./classnames";
export * from "./elements";
export * from "./options";
export * from "./formats";

export const isEntity = <T extends object>(item: T): item is T & BaseModel =>
  "id" in item;
