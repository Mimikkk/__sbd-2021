import { Client } from "@models";
import { useModal } from "shared/hooks";
import { ClientForm } from "dedicated/forms";
import { Button } from "shared/components";
import { CellProps } from "react-table";
import EditIcon from "@mui/icons-material/Edit";

export const EditCell = ({ row: { original } }: CellProps<Client.Row>) => {
  const [ClientModal, open] = useModal(
    <ClientForm initialValues={original} />,
    "Edit client"
  );

  return (
    <>
      <Button title={"Edit"} icon={<EditIcon />} onClick={open} />
      <ClientModal />
    </>
  );
};
