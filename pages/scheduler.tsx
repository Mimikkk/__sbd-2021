import { Tile, Scheduler } from 'shared/components';
import { Grid } from '@material-ui/core';

const ReservationSchedulerView = () => {
  return (
    <Tile>
      <Grid container item justifyContent={'center'}>
        <Scheduler />
      </Grid>
    </Tile>
  );
};

export default ReservationSchedulerView;
