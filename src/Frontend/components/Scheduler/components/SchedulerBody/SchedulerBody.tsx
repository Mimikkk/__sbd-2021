import { List } from 'shared/components/List';
import { Scheduler } from 'shared/models';
import { useEffect } from 'react';
import { style } from 'styles';
import { SchedulerDragContainer } from './components';
import { Grid } from '@mui/material';
import { cx } from 'shared/utils';
import { useReservations } from './reducer';
import { mockCourt } from 'shared/models/values';
import { times } from 'lodash';

export const SchedulerBody = () => {
  const { items, columns, add, remove, initialize } = useReservations();

  useEffect(() => {
    Promise.resolve({
      courts: times(4, () => mockCourt()),
      reservations: [],
    }).then(initialize);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <List
          className={cx(style('scheduler-body'))}
          columns={columns}
          items={items}
          initialRef={Scheduler.initialRef}
        />
      </Grid>
      <SchedulerDragContainer />
    </Grid>
  );
};
