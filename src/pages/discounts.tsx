import AddIcon from "@mui/icons-material/Add";
import { Grid, Typography } from "@mui/material";
import { Button, Tile } from "shared/components";
import { useModal } from "shared/hooks";
import { DiscountForm } from "dedicated/forms";
import { useDiscountList } from "dedicated/hooks";

export default () => {
  const [DiscountList, DiscountListContext] = useDiscountList();
  const [DiscountModal, open] = useModal(<DiscountForm />, "Add new discount");

  return (
    <Tile>
      <DiscountListContext>
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h3">Discounts</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    title={"Add new discount"}
                    icon={<AddIcon />}
                    onClick={open}
                  />
                  <DiscountModal />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ display: "flex", width: "100%", height: "100%" }}>
            <DiscountList />
          </Grid>
        </Grid>
      </DiscountListContext>
    </Tile>
  );
};
