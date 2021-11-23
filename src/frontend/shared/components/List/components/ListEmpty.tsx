import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";

export const ListEmpty = () => {
  return (
    <Grid style={{ width: "100%", height: "100%", justifyContent: "center" }}>
      <CircularProgress color="secondary" />
    </Grid>
  );
};
