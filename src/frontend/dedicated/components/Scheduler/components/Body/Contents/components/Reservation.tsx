import { useSchedulerContext } from "dedicated/components/Scheduler/hooks";
import { ReservationView } from "./ReservationView";
import { differenceInMinutes } from "date-fns";
import { CourtReservation } from "@models";
import { Typography } from "@mui/material";
import { useModal } from "shared/hooks";
import { style } from "styles";
import { VFC } from "react";

interface Props {
  reservation: CourtReservation.Entity;
}

export const Reservation: VFC<Props> = ({ reservation }) => {
  const { start, end } = reservation;

  const {
    courts: { length },
  } = useSchedulerContext();
  const [CourtReservationModal, open] = useModal(
    <ReservationView reservation={reservation} />,
    "Reservation details"
  );

  return (
    <>
      <div
        className={style("scheduler-body__reservation")}
        style={{
          height: `${(differenceInMinutes(end, start) / 30 + 1) * 17}px`,
          minWidth: `${100 / (length + 1) - 8}%`,
        }}
        onClick={open}
      >
        <Typography>Reservation</Typography>
      </div>
      <CourtReservationModal />
    </>
  );
};
