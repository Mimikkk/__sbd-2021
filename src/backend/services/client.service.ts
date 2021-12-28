import { Client } from "@models";
import { uuid } from "@internal/types";
import { servicant } from "./servicant";
import { ListResponse } from "$/services/types";

const url = "api/clients";

export const clientService = {
  create: (item: Client.Model) =>
    servicant.create({ url, item, successMessage: "Added a new client" }),

  readAll: () => servicant.read<ListResponse<Client.Entity>>({ url }),

  update: (id: uuid, item: Client.Model) =>
    servicant.update<Client.Model>({
      url,
      item,
      id,
      successMessage: "Updated a client",
    }),

  delete: (id: uuid) =>
    servicant.delete({ url, id, successMessage: "Removed a client" }),
};
