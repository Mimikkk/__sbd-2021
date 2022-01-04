import { Button, Tile } from "shared/components";
import { useClientList } from "dedicated/hooks";
import { Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useModal } from "shared/hooks";
import { ClientForm } from "dedicated/forms";

export default () => {
  const [ClientList, ClientListContext] = useClientList();
  const [ClientModal, open] = useModal(<ClientForm />, "Add new client");

  return (
    <Tile>
      <ClientListContext>
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item container justifyContent={"space-between"}>
            <Grid item>
              <Typography variant="h3">Clients</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    title={"Add new client"}
                    icon={<AddIcon />}
                    onClick={open}
                  />
                  <ClientModal />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ display: "flex", width: "100%", height: "100%" }}>
            <ClientList />
          </Grid>
        </Grid>
      </ClientListContext>
    </Tile>
  );
};
