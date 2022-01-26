import { Employee } from "@models";
import { useModal } from "shared/hooks";
import { EmployeeForm } from "dedicated/forms";
import { Button } from "shared/components";
import { CellProps } from "react-table";
import EditIcon from "@mui/icons-material/Edit";

export const EditCell = ({ row: { original } }: CellProps<Employee.Row>) => {
  const [EmployeeModal, open] = useModal(
    <EmployeeForm initialValues={original} />,
    "Edit employee"
  );

  return (
    <>
      <Button title={"Edit"} icon={<EditIcon />} onClick={open} />
      <EmployeeModal />
    </>
  );
};
