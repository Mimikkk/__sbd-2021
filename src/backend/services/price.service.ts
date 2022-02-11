import { Price } from "@models";
import { uuid } from "@internal/types";
import { servicant } from "./servicant";
import { ListResponse } from "$/services/types";

const url = "api/prices";

export const priceService = {
  create: (item: Price.Model) =>
    servicant.create({ url, item, successMessage: "Added a new price" }),

  readAll: () => servicant.read<ListResponse<Price.Entity>>({ url }),

  update: (id: uuid, item: Price.Model) =>
    servicant.update<Price.Model>({
      url,
      item,
      id,
      successMessage: "Updated a price",
    }),

  delete: (id: uuid) =>
    servicant.delete({
      url,
      id,
      successMessage: "Removed a price",
      errorMessage: "Price is used in a transaction",
    }),
};
