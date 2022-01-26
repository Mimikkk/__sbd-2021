import { differenceInMinutes } from "date-fns";
import { VFC } from "react";
import { style } from "styles";
import { Typography } from "@mui/material";

interface Props {
  start: Date;
  end: Date;
}

export const ReservationDrag: VFC<Props> = ({ start, end }) => (
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
