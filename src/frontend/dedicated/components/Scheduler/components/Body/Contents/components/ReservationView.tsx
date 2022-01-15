import { TextField } from "@mui/material";
import { BaseModel, CourtReservation } from "@models";
import { Nullable, uuid } from "@internal/types";
import { VFC } from "react";
import { useSchedulerContext } from "dedicated/components/Scheduler/hooks";
import { style } from "styles";
import { formatPerson, formatTime } from "shared/utils";

interface Props {
  reservation: CourtReservation.Entity;
}

const translate = <T extends BaseModel>(id: Nullable<uuid>, items: T[]): T =>
  items.find((i) => i.id === id)!;

export const ReservationView: VFC<Props> = ({ reservation }) => {
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

