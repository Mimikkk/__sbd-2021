import { object, string, boolean, Schema, date } from "yup";
import { Client } from "@models";

export const clientSchema: Schema<Client.Model> = object<Client.Model>({
  address: string().required(),
  birthdate: date().min(new Date(1960, 0)).max(new Date(2010, 0)).required(),
  email: string().email() as any,
  isPermanent: boolean(),
  name: string().required(),
  phone: string().required(),
  surname: string().required(),
}).defined();
