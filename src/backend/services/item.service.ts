import { Item } from "@models";
import { uuid } from "@internal/types";
import { servicant } from "./servicant";
import { ListResponse } from "$/services/types";

const url = "api/items";

export const itemService = {
  create: (item: Item.Model) =>
    servicant.create({ url, item, successMessage: "Created a new item" }),

  readAll: () => servicant.read<ListResponse<Item.Entity>>({ url }),

  update: (id: uuid, item: Item.Model) =>
    servicant.update<Item.Model>({
      url,
      item,
      id,
      successMessage: "Updated an item",
    }),

  delete: (id: uuid) =>
    servicant.delete({ url, id, successMessage: "Removed an item" }),
};
