import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { Navigator, Toaster } from 'components';
import { AppProps } from 'next/app';
import { VFC } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { App as AppStyle } from './App.module.scss';
import './document.scss';
import Head from 'next/head';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Quicksand, sans-serif',
    },
  },
});

const App: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Sbd-tennis</title>
      </Head>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid className={AppStyle} display="flex">
              <Navigator />
              <Grid container item justifyContent="center" className="View">
                <Component {...pageProps} />
              </Grid>
              <Toaster />
            </Grid>
          </LocalizationProvider>
        </ThemeProvider>
      </CssBaseline>
    </>
  );
};

export default App;
