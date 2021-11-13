import { Tile, Scheduler } from 'shared/components';
import { Grid } from '@mui/material';

const ReservationSchedulerView = () => {
  return (
    <Tile>
      <Grid container item justifyContent="center">
        <Scheduler />
      </Grid>
    </Tile>
  );
};

export default ReservationSchedulerView;
