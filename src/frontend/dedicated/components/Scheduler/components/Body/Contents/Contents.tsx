import { useSchedulerContext } from "dedicated/components/Scheduler/hooks";
import { List } from "shared/components";
import { Scheduler } from "@internal/models";
import { createColumns } from "./columns";
import { createRows } from "./rows";
import { style } from "styles";
import { useMemo } from "react";
import { useDrag } from "shared/hooks";

export const SchedulerContents = () => {
  const {
    day: { date },
    courts,
    reservations,
    refresh,
  } = useSchedulerContext();

  const columns = useMemo(() => createColumns(courts, refresh), [courts]);
  const items: Scheduler.Row[] = useMemo(
    () => createRows(courts, reservations, date),
    [courts, date]
  );

  const { Container } = useDrag();

  return (
    <>
      <List
        className={style("scheduler-body")}
        columns={columns}
        items={items}
        cellRef={{ ...Scheduler.ref, refresh }}
      />
      <Container />
    </>
  );
};
