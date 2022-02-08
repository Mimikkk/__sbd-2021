import { object, string, boolean, Schema, number } from "yup";
import { Discount } from "@models";

export const discountSchema: Schema<Discount.Model> = object<Discount.Model>({
  description: string().required(),
  isPercentage: boolean(),
  name: string().required(),
  value: number().min(0).max(100).required(),
}).defined();
