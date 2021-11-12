import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { IconButton, TextField } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { DesktopDatePicker } from '@mui/lab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { addDays } from 'shared/components/Scheduler/utils';
import { Nullable } from 'shared/types';

export const SchedulerHeader = () => {
  const [date, setDate] = useState<Nullable<Date>>(new Date());

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item xs={3}>
        <IconButton onClick={() => setDate(addDays(date!, -1))}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <DesktopDatePicker
          value={date}
          minDate={new Date('2017-01-01')}
          onChange={setDate}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                style: { textAlign: 'center' },
              }}
            />
          )}
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
