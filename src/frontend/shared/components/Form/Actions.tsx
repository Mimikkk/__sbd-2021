import AddIcon from "@mui/icons-material/Add";
import { Button } from "shared/components";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModalContext } from "shared/contexts";
import { useToggle } from "shared/hooks";

interface Props<T extends object> {
  onSubmit?: false | (() => Promise<boolean>);
  onRemove?: false | (() => Promise<void>);
  disabledSubmit?: boolean;
  disabledRemove?: boolean;
}

export const Actions = <T extends object>({
  onSubmit,
  onRemove,
  disabledRemove,
  disabledSubmit,
}: Props<T>) => {
  const { close } = useModalContext();
  const [isSubmit, toggleSubmit] = useToggle(false);
  const handleSubmit = async () => {
    if (!onSubmit) return;
    toggleSubmit();
    if (await onSubmit()) close();
    toggleSubmit();
  };
  const handleRemove = async () => {
    if (!onRemove) return;

    toggleSubmit();
    await onRemove();
    close();
    toggleSubmit();
  };

  return (
    <div
      style={{ display: "flex", columnGap: "8px", justifyContent: "center" }}
    >
      {onSubmit && (
        <Button
          title={"Submit"}
          icon={<AddIcon />}
          onClick={handleSubmit}
          disabled={disabledSubmit || isSubmit}
        />
      )}
      <Button title={"Close"} icon={<CloseIcon />} onClick={close} />
      {onRemove && (
        <Button
          title={"Delete"}
          icon={<DeleteIcon />}
          onClick={handleRemove}
          disabled={disabledRemove || isSubmit}
        />
      )}
    </div>
  );
};
