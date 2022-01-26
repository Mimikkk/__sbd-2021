import { BoolCell, Column, DateCell, IntegralCell } from "shared/components";
import { Court, CourtReservation, Employee } from "@models";
import { CellProps } from "react-table";
import { uuid } from "@internal/types";
import { PersonCell } from "shared/components/List/components/cells/PersonCell";

interface Props {
  courts: Record<uuid, Court.Entity>;
  employees: Record<uuid, Employee.Entity>;
}

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
    Cell: PersonCell(employees),
  },
  {
    accessor: "isPending",
    Header: "Is pending",
    Cell: BoolCell,
  },
];
