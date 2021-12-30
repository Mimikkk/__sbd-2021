import { servicant } from "$/services/servicant";
import { useCourtList } from '../frontend/components/hooks';
import { useModal } from '../frontend/shared/hooks';
import { CourtForm } from '../frontend/components/forms';
import { Button, Tile } from '../frontend/shared/components';
import { Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default () => {
  const [ReservationList, ReservationListContext] = useReservationList();
  const [ReservationModal, open] = useModal(<ReservationForm />);

  return (
    <Tile>
      <CourtListContext>
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h3">Courts</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    title={"Add new reservation"}
                    icon={<AddIcon />}
                    onClick={open}
                  />
                  <CourtModal />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ display: "flex", width: "100%", height: "100%" }}>
            <CourtList />
          </Grid>
        </Grid>
      </CourtListContext>
    </Tile>
  );
};
