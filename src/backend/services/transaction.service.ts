import { Transaction } from "@models";
import { uuid } from "@internal/types";
import { servicant } from "./servicant";
import { ListResponse } from "$/services/types";

const url = "api/transactions";

export const transactionService = {
  create: (item: Transaction.Model) =>
    servicant.create({ url, item, successMessage: "Added a new transaction" }),

  readAll: () => servicant.read<ListResponse<Transaction.Entity>>({ url }),

  update: (id: uuid, item: Transaction.Model) =>
    servicant.update<Transaction.Model>({
      url,
      item,
      id,
      successMessage: "Updated a transaction",
    }),

  delete: (id: uuid) =>
    servicant.delete({ url, id, successMessage: "Removed a transaction" }),
};
