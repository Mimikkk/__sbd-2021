import { Tile } from "shared/components";
import { Grid } from "@mui/material";
import { Scheduler } from "components";

const ReservationSchedulerPage = () => {
  return (
    <Tile>
      <Grid container item justifyContent="center">
        <Scheduler />
      </Grid>
    </Tile>
  );
};

export default ReservationSchedulerPage;
