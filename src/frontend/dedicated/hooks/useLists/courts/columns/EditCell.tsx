import { Court } from "@models";
import { useModal } from "shared/hooks";
import { CourtForm } from "dedicated/forms";
import { Button } from "shared/components";
import { CellProps } from "react-table";
import EditIcon from "@mui/icons-material/Edit";

export const EditCell = ({ row: { original } }: CellProps<Court.Row>) => {
  const [CourtModal, open] = useModal(
    <CourtForm initialValues={original} />,
    "Edit court"
  );

  return (
    <>
      <Button title={"Edit"} icon={<EditIcon />} onClick={open} />
      <CourtModal />
    </>
  );
};
