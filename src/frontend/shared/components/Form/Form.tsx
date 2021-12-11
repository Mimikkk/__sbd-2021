import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "../Button";
import { ReactElement } from "react";
import { Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FormProps } from "components/forms/types";

type Props<T extends object> = Pick<FormProps<T>, "formRef"> & {
  icon: ReactElement;
  title: string;
  children: ReactElement;
};

export const Form = <T extends object>({
  icon,
  title,
  formRef,
  children,
}: Props<T>) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleSubmit = async () => {
    if (!formRef.current) return;
    await formRef.current.submitForm();
    setOpen(false);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Button title={title} icon={icon} onClick={handleClickOpen} />
      <Grid container>
        <Dialog open={open} fullWidth maxWidth="xs" style={{ height: "100%" }}>
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
                  onClick={() => {
                    console.log("delete", formRef.current?.values);
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  title={"Submit"}
                  icon={<CloseIcon />}
                  onClick={handleSubmit}
                  type="submit"
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
    </>
  );
};
