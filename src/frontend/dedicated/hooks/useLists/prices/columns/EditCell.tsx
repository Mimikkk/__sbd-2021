import { Price } from "@models";
import { useModal } from "shared/hooks";
import { PriceForm } from "dedicated/forms";
import { Button } from "shared/components";
import { CellProps } from "react-table";
import EditIcon from "@mui/icons-material/Edit";

export const EditCell = ({ row: { original } }: CellProps<Price.Row>) => {
  const [PriceModal, open] = useModal(
    <PriceForm initialValues={original} />,
    "Edit item reservation"
  );

  return (
    <>
      <Button title={"Edit"} icon={<EditIcon />} onClick={open} />
      <PriceModal />
    </>
  );
};
