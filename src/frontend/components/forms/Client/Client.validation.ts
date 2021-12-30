import { object, string, boolean, Schema, date, number } from 'yup';
import { Client } from '@models';

export const clientSchema: Schema<Client.Model> = object<Client.Model>({
  address: string(),
  birthdate: date(),
  email: string(),
  isPermanent: boolean(),
  name: string(),
  phone: string(),
  surname: string()
}).defined();