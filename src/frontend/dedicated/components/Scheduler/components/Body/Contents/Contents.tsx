import { useSchedulerContext } from "dedicated/components/Scheduler/hooks";
import { List } from "shared/components";
import { Scheduler } from "@internal/models";
import { createColumns } from "./columns";
import { createRows } from "./rows";
import { style } from "styles";
import { useMemo } from "react";

export const SchedulerContents = () => {
  const {
    day: { date },
    courts,
    reservations,
  } = useSchedulerContext();

  const columns = useMemo(() => createColumns(courts), [courts]);
  const items: Scheduler.Row[] = useMemo(
    () => createRows(courts, reservations, date),
    [courts, date]
  );

  return (
    <div>
      <List
        className={style("scheduler-body")}
        columns={columns}
        items={items}
        initialRef={Scheduler.initialRef}
      />
    </div>
  );
};
