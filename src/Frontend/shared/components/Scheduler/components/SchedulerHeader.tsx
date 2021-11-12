import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { addDays } from 'shared/components/Scheduler/utils';
import { DateSelect } from 'shared/components/Scheduler/components/DateSelect';

export const SchedulerHeader = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item xs={3}>
        <IconButton onClick={() => setDate(addDays(date!, -1))}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <DateSelect
          date={date}
          min={new Date()}
          max={addDays(new Date(), 14)}
          onChange={setDate}
        />
      </Grid>
      <Grid item xs={3}>
        <IconButton onClick={() => setDate(addDays(date!, 1))}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
