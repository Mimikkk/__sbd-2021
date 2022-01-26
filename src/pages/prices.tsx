import AddIcon from "@mui/icons-material/Add";
import { Grid, Typography } from "@mui/material";
import { Button, Tile } from "shared/components";
import { useModal } from "shared/hooks";
import { PriceForm } from "dedicated/forms";
import { usePriceList } from "dedicated/hooks";

export default () => {
  const [PriceList, PriceListContext] = usePriceList();
  const [PriceModal, open] = useModal(<PriceForm />, "Add new service");

  return (
    <Tile>
      <PriceListContext>
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h3">Services and prices</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    title={"Add new service"}
                    icon={<AddIcon />}
                    onClick={open}
                  />
                  <PriceModal />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ display: "flex", width: "100%", height: "100%" }}>
            <PriceList />
          </Grid>
        </Grid>
      </PriceListContext>
    </Tile>
  );
};
