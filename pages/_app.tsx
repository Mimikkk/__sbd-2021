import { CssBaseline, Grid } from '@mui/material';
import { Navigator, Toaster } from 'shared/components';
import { AppProps } from 'next/app';
import { VFC } from 'react';
import 'styles/Navigator.scss';
import 'styles/App.scss';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const App: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CssBaseline>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid className="App" display="flex">
          <Navigator />
          <Grid container item justifyContent="center" className="View">
            <Component {...pageProps} />
          </Grid>
          <Toaster />
        </Grid>
      </LocalizationProvider>
    </CssBaseline>
  );
};

export default App;
