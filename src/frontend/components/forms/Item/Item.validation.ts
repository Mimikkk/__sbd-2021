import { object, string, Schema, number } from 'yup';
import { Item } from "@models";

export const ItemSchema: Schema<Item.Model> = object<Item.Model>({
  count: number().required(),
  description: string().required(),
  name: string().required()
}).defined();
