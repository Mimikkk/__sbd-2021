import { object, string, Schema, number } from "yup";
import { Price } from "@models";

export const priceSchema: Schema<Price.Model> = object<Price.Model>({
  cost: number().required("Cost is required").min(1).nullable() as any,
  name: string().required("Name is required").nullable() as any,
}).defined();
