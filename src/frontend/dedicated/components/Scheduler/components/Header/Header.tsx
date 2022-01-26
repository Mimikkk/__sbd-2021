import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { addDays, getDayOfYear } from "date-fns";
import { DateSelect } from "shared/components";
import { useMemo } from "react";
import { IconButton } from "@mui/material";
import { style } from "styles";
import { useSchedulerContext } from "dedicated/components/Scheduler/hooks";

const offset = 14;
export const SchedulerHeader = () => {
  const {
    day: { date, setDate, moveBackward, moveForward },
  } = useSchedulerContext();
  const today = useMemo(() => new Date(), []);

  const reachedMin = useMemo(
    () => getDayOfYear(date) <= getDayOfYear(today) - offset,
    [date]
  );
  const reachedMax = useMemo(
    () => getDayOfYear(date) >= getDayOfYear(today) + offset,
    [date]
  );

  return (
    <div className={style("scheduler-header")}>
      <IconButton onClick={moveBackward} disabled={reachedMin}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <DateSelect
        date={date}
        min={addDays(today, -offset)}
        max={addDays(today, offset)}
        onChange={setDate}
      />
      <IconButton onClick={moveForward} disabled={reachedMax}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};
