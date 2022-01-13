import { BoolCell, Column, DateCell, IntegralCell } from "shared/components";
import { Court, CourtReservation, Employee } from "@models";
import { CellProps } from "react-table";
import { EditCell } from "./EditCell";
import { uuid } from "@internal/types";

interface Props {
  courts: Record<uuid, Court.Entity>;
  employees: Record<uuid, Employee.Entity>;
}

export const formatTeacherName = (teacher?: Employee.Entity) =>
  teacher ? `${teacher.name} ${teacher.surname}` : "-";

const TeacherCell =
  (employees: Record<uuid, Employee.Entity>) =>
  ({ value }: CellProps<CourtReservation.Row>) =>
    formatTeacherName(employees[value]);

export const getColumns = ({
  courts,
  employees,
}: Props): Column<CourtReservation.Row>[] => [
  {
    accessor: "courtId",
    Header: "Court",
    Cell: IntegralCell(courts, "name"),
  },
  {
    accessor: "start",
    Header: "Since",
    Cell: DateCell,
  },
  {
    accessor: "end",
    Header: "To",
    Cell: DateCell,
  },
  {
    id: "isLesson",
    Header: "Is a lesson",
    Cell: (cell: CellProps<CourtReservation.Row>) => (
      <BoolCell {...cell} value={cell.row.original.teacherId} />
    ),
  },
  {
    accessor: "teacherId",
    Header: "Teacher",
    Cell: TeacherCell(employees),
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
