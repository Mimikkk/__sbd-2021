import AddIcon from "@mui/icons-material/Add";
import { Grid, Typography } from "@mui/material";
import { Button, Tile } from "shared/components";
import { CourtList } from "components/forms/Court/CourtList";
import { useModal } from "shared/hooks";
import { CourtForm } from "components/forms";

const Courts = () => {
  const [CourtModal, open] = useModal(<CourtForm />);

  return (
    <Tile>
      <Grid container spacing={2} style={{ width: "100%" }}>
        <Grid item container justifyContent={"space-between"}>
          <Grid item>
            <Typography style={{ fontSize: "2em" }}>{" Courts "}</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  title={"Add new court"}
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
    </Tile>
  );
};

export default Courts;
