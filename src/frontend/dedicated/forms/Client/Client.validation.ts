import { object, string, boolean, Schema, date } from "yup";
import { Client } from "@models";


export const clientSchema: Schema<Client.Model> = object<Client.Model>({
  address: string().required(),
  birthdate: date().required(),
  // @ts-ignore
  email: string().email(),
  isPermanent: boolean(),
  name: string().required(),
  phone: string().required(),
  surname: string().required(),
}).defined();