import { Divider, Grid } from '@mui/material';
import { SchedulerBody, SchedulerEmpty, SchedulerHeader } from './components';
import { style } from 'styles';

export const Scheduler = () => {
  const isEmpty = false;

  return (
    <div className={style('scheduler')}>
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
    </div>
  );
};
