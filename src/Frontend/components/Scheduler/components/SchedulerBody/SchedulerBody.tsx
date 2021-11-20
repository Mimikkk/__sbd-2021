import { List } from 'shared/components/List';
import { Scheduler } from 'shared/models';
import { useEffect } from 'react';
import { style } from 'styles';
import { SchedulerDragContainer } from './components';
import { Grid } from '@mui/material';
import { cx } from 'shared/utils';
import { useSchedulerBodyReducer } from './reducer';
import faker from 'faker';

export const SchedulerBody = () => {
  const { items, columns, initialize } = useSchedulerBodyReducer();

  useEffect(() => {
    Promise.resolve(faker.datatype.number(4) + 1).then(initialize);
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
