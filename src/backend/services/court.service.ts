import { Court } from "@models";
import { uuid } from "@internal/types";
import { servicant } from "./servicant";
import { ListResponse } from "$/services/types";

const url = "api/courts";

interface Filters {
  floor?: string;
}

export const courtService = {
  create: (item: Court.Model) =>
    servicant.create({ url, item, successMessage: "Added a new court" }),

  readAll: (filters?: Filters) =>
    servicant.read<ListResponse<Court.Entity>>({ url, filters }),

  update: (id: uuid, item: Court.Model) =>
    servicant.update<Court.Model>({
      url,
      item,
      id,
      successMessage: "Updated a court",
    }),

  delete: (id: uuid) =>
    servicant.delete({
      url,
      id,
      successMessage: "Removed a court",
      errorMessage: "Court has a reservation",
    }),
};
