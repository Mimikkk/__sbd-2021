import { Grid } from '@mui/material';
import { SchedulerHeader } from './components';

export const Scheduler = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SchedulerHeader />
      </Grid>
    </Grid>
    // <Grid container spacing={2}>
    //   <Grid item xs={12}>
    //     <Divider variant="middle" />
    //   </Grid>
    //   <Grid item xs={12}>
    //     {isEmpty ? <SchedulerEmpty /> : <SchedulerBody />}
    //   </Grid>
    // </Grid>
  );
};
