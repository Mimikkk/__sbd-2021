import { Grid, IconButton } from "@mui/material";
import { Dialog, DialogProps } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";
import { useModalContext } from "shared/contexts";

export type ModalProps = {
  title: string;
} & DialogProps;

export const Modal: FC<ModalProps> = ({ title, children, ...props }) => {
  const { isOpen, close } = useModalContext();

  return (
    <Dialog {...props} fullWidth open={isOpen}>
      <Grid container item style={{ padding: "1em" }}>
        <Grid container item style={{ justifyContent: "space-between" }}>
          <DialogTitle style={{ padding: "1em" }}>{title}</DialogTitle>
          <IconButton style={{ padding: "0em" }} onClick={close}>
            <CloseIcon />
          </IconButton>
        </Grid>
        <Grid item container spacing={1}>
          {children}
        </Grid>
      </Grid>
    </Dialog>
  );
};
