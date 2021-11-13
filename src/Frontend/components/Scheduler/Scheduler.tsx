import { Divider, Grid } from '@mui/material';
import { SchedulerBody, SchedulerEmpty, SchedulerHeader } from './components';

export const Scheduler = () => {
  const isEmpty = false;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SchedulerHeader />
      </Grid>
      <Grid item xs={12}>
        {isEmpty ? <SchedulerEmpty /> : <SchedulerBody />}
      </Grid>
      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>
    </Grid>
  );
};
