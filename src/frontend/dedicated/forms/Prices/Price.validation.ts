import { object, string, Schema, number, boolean } from "yup";
import { Price } from "@models";

export const priceSchema: Schema<Price.Model> = object<Price.Model>({
  cost: number()
    .required("Cost is required")
    .min(1)
    .max(1000)
    .nullable() as any,
  name: string().required("Name is required").nullable() as any,
  isItem: boolean().required("Is Item is required").nullable() as any,
}).defined();
