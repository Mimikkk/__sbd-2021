import { Grid, Typography } from "@mui/material";

export const SchedulerEmpty = () => (
  <Grid item>
    <Typography variant="h6">There are no courts</Typography>
    <Typography variant="body1">
      Add a new court to the system before creating a schedule
    </Typography>
  </Grid>
);
