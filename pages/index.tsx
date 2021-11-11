import { Tile } from 'shared/components';
import { useEffect, useState } from 'react';
import { uuid } from 'shared/types';
import faker from 'faker';
import { Grid } from '@material-ui/core';
import { Divider, IconButton, TextField, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { range } from 'lodash-es';
import { DesktopDatePicker } from '@mui/lab';
import { Nullable } from 'shared/types';
import styled from '@emotion/styled';

const schedulerService = {
  getCourts: () =>
    Promise.resolve(() => {
      return [
        faker.datatype.uuid(),
        faker.datatype.uuid(),
        faker.datatype.uuid(),
      ];
    }),
};
const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const SchedulerHeader = () => {
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

const SchedulerEmptyBody = () => {
  return (
    <Grid item>
      <Typography variant="h6">Brak terminów</Typography>
      <Typography variant="body1">
        Wybierz inny dzień i zobacz jakie terminy są dostępne
      </Typography>
    </Grid>
  );
};

export const courtHours = range(7, 22 + 1);

const SchedulerBody = () => {
  const TypographyCell = styled(Typography)`
    &:hover {
      background: darkred;
    }

    border-left: 1px solid grey;
  `;

  return (
    <Grid container>
      <Grid container item xs={12}>
        <Grid item xs={1} />
        <Grid item container xs={11}>
          <Grid item xs={3}>
            Kort 1
          </Grid>
          <Grid item xs={3}>
            Kort 2
          </Grid>
          <Grid item xs={3}>
            Kort 3
          </Grid>
          <Grid item xs={3}>
            Kort 5
          </Grid>
        </Grid>
      </Grid>
      {courtHours.map((hour) => (
        <>
          <Grid item xs={1}>
            <Typography>{hour}</Typography>
          </Grid>
          <Grid item container xs={11}>
            <Grid item xs={3}>
              <TypographyCell>{hour}</TypographyCell>
            </Grid>
            <Grid item xs={3}>
              <TypographyCell>{hour}</TypographyCell>
            </Grid>
            <Grid item xs={3}>
              <TypographyCell>{hour}</TypographyCell>
            </Grid>
            <Grid item xs={3}>
              <TypographyCell>{hour}</TypographyCell>
            </Grid>
          </Grid>
          {hour < 22 ? (
            <Grid item xs={12}>
              <Divider />
            </Grid>
          ) : null}
        </>
      ))}
    </Grid>
  );
};

const Scheduler = () => {
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
        {isEmpty ? <SchedulerEmptyBody /> : <SchedulerBody />}
      </Grid>
    </Grid>
  );
};

const Index = () => {
  const [items, setItems] = useState<uuid[]>([]);

  useEffect(() => {
    schedulerService.getCourts().then(setItems);
  }, []);

  return (
    <Tile>
      <Scheduler />
    </Tile>
  );
};

export default Index;
