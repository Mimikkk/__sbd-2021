import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { addDays, getDayOfYear } from "date-fns";
import { DateSelect } from "shared/components";
import { useEffect, useMemo } from "react";
import { IconButton } from "@mui/material";
import { useDate } from "shared/hooks";
import { style } from "styles";

const offset = 14;
export const SchedulerHeader = () => {
  const { date, setDate, moveBackward, moveForward } = useDate();
  const today = useMemo(() => new Date(), []);

  useEffect(() => {}, [date]);

  const reachedMin = getDayOfYear(date) <= getDayOfYear(today);
  const reachedMax = getDayOfYear(date) >= getDayOfYear(today) + offset;

  return (
    <div className={style("scheduler-header")}>
      <IconButton onClick={moveBackward} disabled={reachedMin}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <DateSelect
        date={date}
        min={today}
        max={addDays(today, offset)}
        onChange={setDate}
      />
      <IconButton onClick={moveForward} disabled={reachedMax}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};
