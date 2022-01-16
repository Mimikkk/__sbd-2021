import { ItemReservation } from "@models";
import { useModal } from "shared/hooks";
import { ItemReservationForm } from "dedicated/forms";
import { Button } from "shared/components";
import { CellProps } from "react-table";
import EditIcon from "@mui/icons-material/Edit";

export const EditCell = ({
  row: { original },
}: CellProps<ItemReservation.Row>) => {
  const [ItemReservationModal, open] = useModal(
    <ItemReservationForm initialValues={original} />,
    "Edit item reservation"
  );

  return (
    <>
      <Button title={"Edit"} icon={<EditIcon />} onClick={open} />
      <ItemReservationModal />
    </>
  );
};
