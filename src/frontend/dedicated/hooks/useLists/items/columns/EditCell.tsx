import { Item } from "@models";
import { useModal } from "shared/hooks";
import { ItemForm } from "dedicated/forms";
import { Button } from "shared/components";
import { CellProps } from "react-table";
import EditIcon from "@mui/icons-material/Edit";

export const EditCell = ({ row: { original } }: CellProps<Item.Row>) => {
  const [ItemModal, open] = useModal(
    <ItemForm initialValues={original} />,
    "Edit item"
  );

  return (
    <>
      <Button title={"Edit"} icon={<EditIcon />} onClick={open} />
      <ItemModal />
    </>
  );
};
