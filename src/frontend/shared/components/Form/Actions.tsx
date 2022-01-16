import AddIcon from "@mui/icons-material/Add";
import { Button } from "shared/components";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModalContext } from "shared/contexts";

interface Props<T extends object> {
  onSubmit?: false | (() => Promise<boolean>);
  onRemove?: false | (() => Promise<void>);
}

export const Actions = <T extends object>({ onSubmit, onRemove }: Props<T>) => {
  const { close } = useModalContext();
  const handleSubmit = async () =>
    onSubmit && onSubmit().then((exit) => exit && close());
  const handleRemove = async () => onRemove && onRemove().then(close);

  return (
    <div
      style={{ display: "flex", columnGap: "8px", justifyContent: "center" }}
    >
      {onSubmit && (
        <Button title={"Submit"} icon={<AddIcon />} onClick={handleSubmit} />
      )}
      <Button title={"Close"} icon={<CloseIcon />} onClick={close} />
      {onRemove && (
        <Button title={"Delete"} icon={<DeleteIcon />} onClick={handleRemove} />
      )}
    </div>
  );
};
