import AddIcon from "@mui/icons-material/Add";
import { Grid, Typography } from "@mui/material";
import { Button, Tile } from "shared/components";
import { useModal } from "shared/hooks";
import { ItemForm } from "dedicated/forms";
import { useItemList } from "dedicated/hooks";

export default () => {
  const [ItemList, ItemListContext] = useItemList();
  const [ItemModal, open] = useModal(<ItemForm />, "Add new item");

  return (
    <Tile>
      <ItemListContext>
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h3">Items</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    title={"Add new item"}
                    icon={<AddIcon />}
                    onClick={open}
                  />
                  <ItemModal />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ display: "flex", width: "100%", height: "100%" }}>
            <ItemList />
          </Grid>
        </Grid>
      </ItemListContext>
    </Tile>
  );
};
