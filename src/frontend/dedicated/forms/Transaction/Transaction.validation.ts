import { object, string, Schema } from "yup";
import { Transaction } from "@models";

export const TransactionSchema: Schema<Transaction.Model> =
  object<Transaction.Model>({
    clientId: string().required(),
    priceId: string().required(),
    discountId: string().required(),
    reservationId: string().required(),
  }).defined();
