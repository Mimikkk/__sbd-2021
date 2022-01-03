import { Transaction } from '@models';
import { useModal } from "shared/hooks";
import {  TransactionForm } from "components/forms";
import { Button } from "shared/components";
import { CellProps } from "react-table";
import EditIcon from "@mui/icons-material/Edit";

export const EditCell = ({ row: { original } }: CellProps< Transaction.Row>) => {
  const [ TransactionModal, open] = useModal(< TransactionForm initialValues={original}/>, "Edit transaction");

  return (
    <>
      <Button title={"Edit"} icon={<EditIcon />} onClick={open} />
      < TransactionModal />
    </>
  );
};
