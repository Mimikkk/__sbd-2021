import { object, string, boolean, Schema } from "yup";
import { Court } from "@models";

export const courtValidationSchema: Schema<Court.Model> = object<Court.Model>({
  isUnderMaintenance: boolean(),
  isCovered: boolean(),
  floor: string(),
  name: string(),
}).defined();
