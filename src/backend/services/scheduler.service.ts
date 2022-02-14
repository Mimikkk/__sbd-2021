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
  delete: (courtReservationId: uuid, values: any) =>
    servicant.delete({
      id: courtReservationId,
      url,
      data: values,
      successMessage: "removed schedule reservations",
    }),
};
