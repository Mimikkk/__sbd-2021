import { CourtReservation } from "@models";
import { uuid } from "@internal/types";
import { servicant } from "./servicant";
import { ListResponse } from "$/services/types";

const url = "api/court-reservations";

export const courtReservationService = {
  create: (item: CourtReservation.Model) =>
    servicant.create({ url, item, successMessage: "Created resource" }),

  readAll: () => servicant.read<ListResponse<CourtReservation.Entity>>({ url }),

  update: (id: uuid, item: CourtReservation.Model) =>
    servicant.update<CourtReservation.Model>({
      url,
      item,
      id,
      successMessage: "Updated resource",
    }),

  delete: (id: uuid) =>
    servicant.delete({ url, id, successMessage: "Deleted resource" }),
};
