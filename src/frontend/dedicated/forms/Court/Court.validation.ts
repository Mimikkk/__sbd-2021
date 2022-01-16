import { object, string, boolean, Schema } from "yup";
import { Court } from "@models";

export const courtSchema: Schema<Court.Model> = object<Court.Model>({
  isCovered: boolean(),
  floor: string().required(),
  name: string().required(),
}).defined();
