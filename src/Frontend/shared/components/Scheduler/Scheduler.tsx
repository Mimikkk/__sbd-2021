import { Grid } from '@material-ui/core';
import { Divider } from '@mui/material';
import { SchedulerBody, SchedulerEmpty, SchedulerHeader } from './components';

export const Scheduler = () => {
  const isEmpty = false;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SchedulerHeader />
      </Grid>
      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={12}>
        {isEmpty ? <SchedulerEmpty /> : <SchedulerBody />}
      </Grid>
    </Grid>
  );
};