import { useSchedulerContext } from "dedicated/components/Scheduler/hooks";
import { ReservationPendingForm } from "./Reservation.form";
import { differenceInMinutes } from "date-fns";
import { CourtReservation } from "@models";
import { Typography } from "@mui/material";
import { useModal } from "shared/hooks";
import { style } from "styles";
import { VFC } from "react";
import { cx } from "shared/utils";

interface Props {
  reservation: CourtReservation.Entity;
}

export const Reservation: VFC<Props> = ({ reservation }) => {
  const { start, end, isPending, courtId } = reservation;
  const { courts } = useSchedulerContext();
  const court = courts.find(({ id }) => id === courtId);

  const [CourtReservationFormModal, open] = useModal(
    <ReservationPendingForm reservation={reservation} disabled={!isPending} />,
    isPending ? `fill ${court!.name} reservation` : "Reservation details"
  );

  return (
    <>
      <div
        className={cx(
          style("scheduler-body__reservation"),
          isPending && style("scheduler-body__reservation--pending")
        )}
        style={{
          height: `${(differenceInMinutes(end, start) / 30 + 1) * 17}px`,
          minWidth: isPending
            ? `${100 / (courts.length + 1) - 12}%`
            : `${100 / (courts.length + 1) - 8}%`,
        }}
        onClick={open}
      >
        <Typography>{isPending ? "Pending..." : "Reservation"}</Typography>
      </div>
      <CourtReservationFormModal />
    </>
  );
};
