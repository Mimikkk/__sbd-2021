import { useCourtReservationList } from "dedicated/hooks";
import { Button, Tile } from "shared/components";
import { Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useModal } from "shared/hooks";
import { CourtReservationForm } from "dedicated/forms";

export default () => {
  const [CourtReservationList, CourtReservationListContext] =
    useCourtReservationList();

  const [CourtReservationModal, open] = useModal(
    <CourtReservationForm />,
    "Add reservation"
  );

  return (
    <CourtReservationListContext>
      <Tile>
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h3">Reservations</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    title={"Add new reservation"}
                    icon={<AddIcon />}
                    onClick={open}
                  />
                  <CourtReservationModal />
                </Grid>
              </Grid>
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
