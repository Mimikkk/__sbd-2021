import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import { Button } from "shared/components";
import CloseIcon from "@mui/icons-material/Close";
import { useModalContext } from "shared/contexts";

interface Props<T extends object> {
  onSubmit: () => Promise<void>;
}

export const Actions = <T extends object>({ onSubmit }: Props<T>) => {
  const { close } = useModalContext();
  const handleSubmit = async () => {
    await onSubmit();
    close();
  };

  return (
    <Grid item container spacing={1} style={{ justifyContent: "center" }}>
      <Grid item>
        <Button
          title={"Submit"}
          icon={<AddIcon />}
          onClick={handleSubmit}
          type="submit"
        />
      </Grid>
      <Grid item>
        <Button title={"Close"} icon={<CloseIcon />} onClick={close} />
      </Grid>
    </Grid>
  );
};
