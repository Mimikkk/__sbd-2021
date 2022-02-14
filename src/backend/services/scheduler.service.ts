import { servicant } from "$/services/servicant";
import { uuid } from "@internal/types";

const url = "api/scheduler";
export const schedulerService = {
  create: (courtReservationId: uuid, values: any) =>
    servicant.create({
      url: `${url}/${courtReservationId}`,
      item: values,
      successMessage: "Created schedule reservation",
    }),
  delete: (courtReservationId: uuid) =>
    servicant.delete({
      id: courtReservationId,
      url,
      successMessage: "removed schedule reservations",
    }),
};
