import { Redirect, Route } from 'react-router-dom';
import { Views } from 'Frontend/components/views/values';
import { Grid } from '@mui/material';

export const ViewHandler = () => {
  return (
    <Grid
      sx={{
        justifyContent: 'center',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Route path="/:path">
        {({ match }) => {
          if (!match) return <Redirect to="home" />;
          const path = match.params.path;
          console.log(match);
          return Views[path] ?? <Redirect to="pageNotFound" />;
        }}
      </Route>
    </Grid>
  );
};
