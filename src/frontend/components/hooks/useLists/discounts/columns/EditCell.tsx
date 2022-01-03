import { Discount} from "@models";
import { useModal } from "shared/hooks";
import {  DiscountForm } from "components/forms";
import { Button } from "shared/components";
import { CellProps } from "react-table";
import EditIcon from "@mui/icons-material/Edit";

export const EditCell = ({ row: { original } }: CellProps< Discount.Row>) => {
  const [ DiscountModal, open] = useModal(< DiscountForm initialValues={original}/>, "Edit discount");

  return (
    <>
      <Button title={"Edit"} icon={<EditIcon />} onClick={open} />
      < DiscountModal />
    </>
  );
};
