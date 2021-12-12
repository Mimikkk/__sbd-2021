import { List } from "shared/components";
import { useEffect } from "react";
import { style } from "styles";
import { SchedulerDragContainer } from "./components";
import { Grid } from "@mui/material";
import { cx } from "shared/utils";
import { useReservations } from "./reducer";
import { times } from "lodash";
import { mockCourt } from "@models/values";
import { Scheduler } from "@models";

export const SchedulerBody = () => {
  const { items, columns, initialize } = useReservations();

  useEffect(() => {
    Promise.resolve({
      courts: times(4, () => mockCourt()),
      reservations: [
        { start: 1, end: 4, court: 0 },
        { start: 0, end: 4, court: 1 },
        { start: 0, end: 4, court: 2 },
      ] as Scheduler.Reservation[],
    }).then(initialize);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <List
          className={cx(style("scheduler-body"))}
          columns={columns}
          items={items}
          initialRef={Scheduler.initialRef}
        />
      </Grid>
      <SchedulerDragContainer />
    </Grid>
  );
};
