import { useCourtReservationList } from "dedicated/hooks";
import { Tile } from "shared/components";
import { Grid, Typography } from "@mui/material";

export default () => {
  const [CourtReservationList, CourtReservationListContext] =
    useCourtReservationList();

  return (
    <CourtReservationListContext>
      <Tile>
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h3">Reservations</Typography>
            </Grid>
          </Grid>
          <Grid item style={{ display: "flex", width: "100%", height: "100%" }}>
            <CourtReservationList />
          </Grid>
        </Grid>
      </Tile>
    </CourtReservationListContext>
  );
};
