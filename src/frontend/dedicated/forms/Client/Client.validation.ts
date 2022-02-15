import { object, string, boolean, Schema, date } from "yup";
import { Client } from "@models";
import { phone } from "shared/utils/validation";

export const clientSchema: Schema<Client.Model> = object<Client.Model>({
  address: string().required(),
  birthdate: date()
    .min(new Date(1960, 0), "Employee must be alive")
    .max(new Date(2010, 0), "Employee must be older than 12")
    .required(),
  email: string().email().required(),
  isPermanent: boolean(),
  name: string().required(),
  phone: phone().required(),
  surname: string().required(),
}).defined();
