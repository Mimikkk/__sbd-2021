import { Discount } from "@models";
import { uuid } from "@internal/types";
import { servicant } from "./servicant";
import { ListResponse } from "$/services/types";

const url = "api/discounts";

export const discountService = {
  create: (item: Discount.Model) =>
    servicant.create({ url, item, successMessage: "Added a new discount" }),

  readAll: () => servicant.read<ListResponse<Discount.Entity>>({ url }),

  update: (id: uuid, item: Discount.Model) =>
    servicant.update<Discount.Model>({
      url,
      item,
      id,
      successMessage: "Updated a discount",
    }),

  delete: (id: uuid) =>
    servicant.delete({ url, id, successMessage: "Removed a discount" }),
};
