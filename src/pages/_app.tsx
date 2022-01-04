import { createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { Navigator, Toaster } from "dedicated/components";
import { AppProps } from "next/app";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Head from "next/head";
import { style } from "styles";
import "./document.scss";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Quicksand, sans-serif",
    },
  },
});

export default ({ Component, pageProps }: AppProps) => {
  return (
    <CssBaseline>
      <Head>
        <title>Sbd-tennis</title>
      </Head>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container className={style("app")}>
            <Grid xs={2} item>
              <Navigator />
            </Grid>
            <Grid xs={10} item>
              <Component {...pageProps} />
            </Grid>
          </Grid>
          <Toaster />
        </LocalizationProvider>
      </ThemeProvider>
    </CssBaseline>
  );
};
