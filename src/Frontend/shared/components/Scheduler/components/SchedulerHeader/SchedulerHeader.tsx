import React, { useMemo } from 'react';
import { Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { addDays } from 'shared/components/Scheduler/utils';
import { DateSelect } from 'shared/components/Scheduler/components/DateSelect';
import { useHeaderReducer } from './reducer';

const offset = 14;
export const SchedulerHeader = () => {
  const { date, setDate, moveBackward, moveForward } = useHeaderReducer();
  const today = useMemo(() => new Date(), []);

  const reachedMin = date < addDays(today, 1);
  const reachedMax = date > addDays(today, offset - 1);

  return (
    <div>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={3}>
          <IconButton onClick={moveBackward} disabled={reachedMin}>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <DateSelect
            date={date}
            min={today}
            max={addDays(today, offset)}
            onChange={setDate}
          />
        </Grid>
        <Grid item xs={3}>
          <IconButton onClick={moveForward} disabled={reachedMax}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};
