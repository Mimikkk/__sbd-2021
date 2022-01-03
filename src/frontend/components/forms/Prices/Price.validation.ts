import { object, string, Schema, number } from "yup";
import { Price } from "@models";

export const priceSchema: Schema<Price.Model> = object<Price.Model>({
  cost: number().required(),
  description: string().required(),
}).defined();
