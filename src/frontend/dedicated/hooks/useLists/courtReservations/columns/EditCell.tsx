import { CourtReservation } from "@models";
import { useModal } from "shared/hooks";
import { CourtReservationForm } from "dedicated/forms";
import { Button } from "shared/components";
import { CellProps } from "react-table";
import EditIcon from "@mui/icons-material/Edit";

export const EditCell = ({
  row: { original },
}: CellProps<CourtReservation.Row>) => {
  const [CourtReservationModal, open] = useModal(
    <CourtReservationForm initialValues={original} />,
    "Edit reservation"
  );

  return (
    <>
      <Button title={"Edit"} icon={<EditIcon />} onClick={open} />
      <CourtReservationModal />
    </>
  );
};
