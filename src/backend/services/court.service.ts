import { Court } from "@models";
import { uuid } from "@internal/types";
import { servicant } from "./servicant";
import { ListResponse } from "$/services/types";

const url = "api/courts";

export const courtService = {
  create: (item: Court.Model) =>
    servicant.create({ url, item, successMessage: "Created court" }),

  readAll: () => servicant.read<ListResponse<Court.Entity>>({ url }),

  update: (id: uuid, item: Court.Model) =>
    servicant.update<Court.Model>({
      url,
      item,
      id,
      successMessage: "Updated court",
    }),

  delete: (id: uuid) =>
    servicant.delete({ url, id, successMessage: "Deleted court" }),
};
