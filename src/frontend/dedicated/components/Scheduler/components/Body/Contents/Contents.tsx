import { useSchedulerContext } from "dedicated/components/Scheduler/hooks";
import { List } from "shared/components";
import { useListFetch } from "shared/hooks";
import { reservationService } from "@services";
import { Scheduler } from "@internal/models";
import { createColumns } from "./columns";
import { createRows } from "./rows";
import { style } from "styles";

export const SchedulerContents = () => {
  const {} = useListFetch(reservationService.readAll);

  const {
    day: { date },
    courts,
  } = useSchedulerContext();

  const items: Scheduler.Row[] = createRows(courts, date);
  const columns = createColumns(courts);

  return (
    <div>
      <List
        className={style("scheduler-body")}
        columns={columns}
        items={items}
        ref={Scheduler.ref}
      />
    </div>
  );
};
