import { Divider, styled, Typography } from '@mui/material';
import { Grid } from '@material-ui/core';
import { courtHours } from 'shared/components/Scheduler/values';

export const SchedulerBody = () => {
  const TypographyCell = styled(Typography)`
    &:hover {
      background: darkred;
      border-radius: 8px;
    }

    &--is-selected {
      background: darkred;
      border-radius: 8px;
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
