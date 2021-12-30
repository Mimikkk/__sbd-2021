import { Grid, IconButton} from '@mui/material';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { FC} from 'react';
import { useModalContext } from "shared/contexts";

export interface ModalProps {
  title: string;
}

export const Modal: FC<ModalProps> = ({ title, children }) => {
  const { isOpen, close } = useModalContext();

  return (
    <Dialog fullWidth maxWidth="xs" open={isOpen}>
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
