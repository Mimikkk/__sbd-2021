import { BoolCell, Column, DateCell, IntegralCell } from "shared/components";
import { Court, CourtReservation, Employee } from "@models";
import { CellProps } from "react-table";
import { EditCell } from "./EditCell";
import { uuid } from "@internal/types";

interface Props {
  courts: Record<uuid, Court.Entity>;
  teachers: Record<uuid, Employee.Entity>;
}

const TeacherCell =
  (teachers: Record<uuid, Employee.Entity>) =>
  ({ value }: CellProps<CourtReservation.Row>) =>
    value && teachers[value]
      ? `${teachers[value].name} ${teachers[value].surname}`
      : "-";

export const getColumns = ({
  courts,
  teachers,
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
    Cell: TeacherCell(teachers),
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
