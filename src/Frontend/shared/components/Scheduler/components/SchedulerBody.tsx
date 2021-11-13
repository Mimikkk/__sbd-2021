import { Grid, Divider, styled, Typography } from '@mui/material';
import { courtDates } from 'shared/components/Scheduler/values';
import { format } from 'date-fns';

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
    <p>
      <Grid container spacing={1}>
        {courtDates(new Date()).map((hour, index) => (
          <Grid item xs={12} key={index}>
            <TypographyCell variant="h6">
              {format(hour, 'HH:mm')}
            </TypographyCell>
            <Divider />
          </Grid>
        ))}
      </Grid>
    </p>
  );

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
      {courtDates(new Date()).map((hour) => {
        return null;

        return (
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
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};
