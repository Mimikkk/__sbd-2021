import { Tile } from "shared/components";
import { Grid } from "@mui/material";
import { Scheduler } from "components";

export default () => {
  return (
    <Tile>
      <Grid container item justifyContent="center">
        <Scheduler />
      </Grid>
    </Tile>
  );
};
