import { object, string, Schema, number } from "yup";
import { Transaction } from "@models";

export const TransactionSchema: Schema<Transaction.Model> =
  object<Transaction.Model>({
    clientId: string().required(),
    cost: number().required(),
    discountId: string().required(),
    reservationId: string().required(),
  }).defined();
