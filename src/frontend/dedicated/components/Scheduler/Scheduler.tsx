import { SchedulerBody, SchedulerFooter, SchedulerHeader } from "./components";
import { useScheduler } from "./hooks";
import { Grid } from "@mui/material";
import { style } from "styles";

export const Scheduler = () => {
  const [SchedulerProvider] = useScheduler();

  return (
    <SchedulerProvider>
      <Grid className={style("scheduler")} container spacing={2}>
        <Grid item xs={12}>
          <SchedulerHeader />
        </Grid>
        <Grid item xs={12}>
          <SchedulerBody />
        </Grid>
        <Grid item xs={12}>
          <SchedulerFooter />
        </Grid>
      </Grid>
    </SchedulerProvider>
  );
};
