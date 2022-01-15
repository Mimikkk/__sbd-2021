import { VFC } from "react";
import { BaseModel, CourtReservation } from "@models";
import { differenceInMinutes } from "date-fns";
import { useSchedulerContext } from "dedicated/components/Scheduler/hooks";
import { style } from "styles";
import { useModal } from "shared/hooks";
import { Typography, TextField } from "@mui/material";
import { Nullable, uuid } from "@internal/types";
import { formatPerson, formatTime } from "shared/utils";

interface Props {
  reservation: CourtReservation.Entity;
}

interface Propss {
  reservation: CourtReservation.Entity;
}

const translate = <T extends BaseModel>(id: Nullable<uuid>, items: T[]): T =>
  items.find((i) => i.id === id)!;

export const ReservationView: VFC<Propss> = ({ reservation }) => {
  const { courts, employees } = useSchedulerContext();
  const { start, end, courtId, teacherId } = reservation;
  const teacher = translate(teacherId, employees);

  return (
    <div className={style("form")}>
      <div className={style("form--split")}>
        <TextField label="Name" disabled />
        <TextField label="Surname" disabled />
        <TextField label="Is permanent" disabled />
      </div>
      <div className={style("form--split")}>
        <TextField label="Item" disabled size="small" />
        <TextField label="Count" disabled size="small" />
      </div>
      <div className={style("form--split")}>
        <TextField label="Item" disabled size="small" />
        <TextField label="Count" disabled size="small" />
      </div>
      <div className={style("form--split")}>
        <TextField label="Item" disabled size="small" />
        <TextField label="Count" disabled size="small" />
      </div>
      <TextField
        value={translate(courtId, courts).name}
        label="Court"
        disabled
      />
      <div className={style("form--split")}>
        <TextField value={formatTime(start)} label="Start" disabled />
        <TextField value={formatTime(end)} label="End" disabled />
      </div>
      <TextField
        value={teacher && formatPerson(teacher)}
        label="Teacher"
        disabled
      />
    </div>
  );
};

interface Propsss {
  start: Date;
  end: Date;
}

export const ReservationDrag: VFC<Propsss> = ({ start, end }) => (
  <div
    className={style("scheduler-body__reservation")}
    style={{
      height: `${(differenceInMinutes(end, start) / 30 + 1) * 17}px`,
      minWidth: "20%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      pointerEvents: "none",
    }}
    id="reservation-drag-container"
  >
    <Typography>Reserving...</Typography>
  </div>
);

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
