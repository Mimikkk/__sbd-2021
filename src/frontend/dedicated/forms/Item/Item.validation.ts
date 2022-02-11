import { object, string, Schema, number } from "yup";
import { Item } from "@models";

export const ItemSchema: Schema<Item.Model> = object<Item.Model>({
  count: number().min(1).max(1000).required(),
  description: string().required(),
  name: string().required(),
} as any).defined();
