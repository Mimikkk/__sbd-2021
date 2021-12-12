import { SqlResponse } from "$sql/types";
import { Transaction } from "@models";
import { translateFootprint } from "./footprint.orm";

export const translateTransaction = (raw: SqlResponse): Transaction.Entity => ({
  ...translateFootprint(raw),
  cost: raw.cost,
  clientId: raw.client_id,
  discountId: raw.client_id,
  reservationId: raw.client_id,
});
