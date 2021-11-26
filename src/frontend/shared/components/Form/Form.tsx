import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "../Button";
import { ReactElement, FC } from "react";
import { Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export interface FormProps {
  icon: ReactElement;
  title: string;
}

export const Form: FC<FormProps> = ({ icon, title, children }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button title={title} icon={icon} onClick={handleClickOpen} />
      <Grid container>
        <Dialog
          open={open}
          fullWidth
          maxWidth="xs"
          style={{
            height: "100%",
          }}
        >
          <Grid
            item
            container
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "1em",
            }}
          >
            <Grid item style={{ alignSelf: "flex-end" }}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item style={{ padding: "0.5em 1em" }}>
              <DialogTitle style={{ fontSize: "1.5em" }}>{title}</DialogTitle>
            </Grid>
            <Grid item container>
              <Grid
                item
                container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "300px",
                  width: "100%",
                }}
              >
                {children}
              </Grid>
            </Grid>

            <Grid
              item
              container
              spacing={1}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item>
                <Button
                  title={"Submit"}
                  icon={<CloseIcon />}
                  onClick={handleClose}
                />
              </Grid>
              <Grid item>
                <Button
                  title={"Close"}
                  icon={<CloseIcon />}
                  onClick={handleClose}
                />
              </Grid>
            </Grid>
          </Grid>
        </Dialog>
      </Grid>
    </div>
  );
};
