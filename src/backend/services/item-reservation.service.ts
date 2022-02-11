import { ItemReservation } from "@models";
import { uuid } from "@internal/types";
import { servicant } from "./servicant";
import { ListResponse } from "$/services/types";
import { parseReservations } from "$/services/parsing";

const url = "api/items/reservations";

export const itemReservationService = {
  create: (item: ItemReservation.Model) =>
    servicant.create({ url, item, successMessage: "Created resource" }),

  readAll: () =>
    servicant
      .read<ListResponse<ItemReservation.Entity>>({ url })
      .then(parseReservations),

  update: (id: uuid, item: ItemReservation.Model) =>
    servicant.update<ItemReservation.Model>({
      url,
      item,
      id,
      successMessage: "Updated resource",
    }),

  delete: (id: uuid) =>
    servicant.delete({
      url,
      id,
      successMessage: "Deleted resource",
      errorMessage: "Transaction exists for this reservation",
    }),
};
