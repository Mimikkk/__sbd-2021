import { Button, Tile } from "shared/components";
import {
  useItemReservationList,
} from "components/hooks";
import { Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useModal } from '../frontend/shared/hooks';
import { ItemReservationForm} from '../frontend/components/forms';


export default () => {
  const [ItemReservationList, ItemReservationListContext] = useItemReservationList();
  const [ItemReservationModal, open] = useModal(<ItemReservationForm />, "Add item reservation");

  return (
    <Tile>
      <ItemReservationListContext>
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h3">Item reservations</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    title={"Add item reservation"}
                    icon={<AddIcon />}
                    onClick={open}
                  />
                  <ItemReservationModal />
                </Grid>
              </Grid>
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
