import { CssBaseline, Grid } from '@mui/material';
import { Navigator, Toaster } from 'shared/components';
import { AppProps } from 'next/app';
import { VFC } from 'react';
import 'styles/App.scss';

const App: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CssBaseline>
      <Grid className="App" display="flex">
        <Navigator />
        <Grid container item justifyContent="center">
          <Component {...pageProps} />
        </Grid>
        <Toaster />
      </Grid>
    </CssBaseline>
  );
};

export default App;
