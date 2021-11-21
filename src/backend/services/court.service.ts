import { Court } from "@models";
import { uuid } from "@internal/types";
import { servicant } from "./servicant";

const url = "api/courts";

export interface ListResponse<T> {
  items: T[];
  total: number;
}

export const courtService = {
  create: (item: Court.Model) =>
    servicant.create({ url, item, successMessage: "super" }),

  readAll: () => servicant.read<ListResponse<Court.Entity>>({ url }),

  update: (id: uuid, item: Court.Model) =>
    servicant.update<Court.Model>({ url, item, id }),

  delete: (id: uuid) => servicant.delete({ url, id }),
};
