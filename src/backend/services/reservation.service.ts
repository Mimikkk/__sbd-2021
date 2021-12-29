import { Reservation } from "@models";
import { servicant } from "./servicant";
import { ListResponse } from "$/services/types";

const url = "api/reservations";

export const reservationService = {
  readAll: () => servicant.read<ListResponse<Reservation.Entity>>({ url }),
};
