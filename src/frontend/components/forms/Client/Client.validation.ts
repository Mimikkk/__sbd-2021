import { object, string, boolean, Schema, date } from "yup";
import { Client } from "@models";

export const clientSchema: Schema<Client.Model> = object<Client.Model>({
  address: string().required(),
  birthdate: date().required(),
  email: string().required().email(),
  isPermanent: boolean(),
  name: string().required(),
  phone: string().required(),
  surname: string().required(),
}).defined();