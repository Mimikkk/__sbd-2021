import { Grid, Typography } from '@mui/material';

export const SchedulerEmpty = () => (
  <Grid item>
    <Typography variant="h6">Brak terminów</Typography>
    <Typography variant="body1">
      Wybierz inny dzień i zobacz jakie terminy są dostępne
    </Typography>
  </Grid>
);
