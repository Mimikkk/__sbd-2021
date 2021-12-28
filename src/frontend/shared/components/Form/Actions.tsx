import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import { Button } from "shared/components";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModalContext } from "shared/contexts";

interface Props<T extends object> {
  onSubmit: () => Promise<boolean>;
  onRemove?: () => Promise<void>;
}

export const Actions = <T extends object>({ onSubmit, onRemove }: Props<T>) => {
  const { close } = useModalContext();
  const handleSubmit = async () => {
    if (await onSubmit()) close();
  };
  const handleRemove = async () => {
    await onRemove?.();
    close();
  };

  return (
    <Grid container style={{ justifyContent: "center" }}>
      <Grid item xs={4} style={{ justifyContent: "center" }}>
        <Button title={"Submit"} icon={<AddIcon />} onClick={handleSubmit} />
      </Grid>
      <Grid item xs={4} style={{ justifyContent: "center" }}>
        <Button title={"Close"} icon={<CloseIcon />} onClick={close} />
      </Grid>
      {onRemove && (
        <Grid item xs={4} style={{ justifyContent: "center" }}>
          <Button
            title={"Delete"}
            icon={<DeleteIcon />}
            onClick={handleRemove}
          />
        </Grid>
      )}
    </Grid>
  );
};
