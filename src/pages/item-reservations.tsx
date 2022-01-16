import { Tile } from "shared/components";
import { useItemReservationList } from "dedicated/hooks";
import { Grid, Typography } from "@mui/material";

export default () => {
  const [ItemReservationList, ItemReservationListContext] =
    useItemReservationList();

  return (
    <Tile>
      <ItemReservationListContext>
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h3">Item reservations</Typography>
            </Grid>
          </Grid>
          <Grid item style={{ display: "flex", width: "100%", height: "100%" }}>
            <ItemReservationList />
          </Grid>
        </Grid>
      </ItemReservationListContext>
    </Tile>
  );
};
