import { BoolCell, Column, OptionalCell } from "shared/components";
import { CourtReservation } from "@models";
import { CellProps } from "react-table";
import { EditCell } from './EditCell';

export const columns: Column<CourtReservation.Row>[] = [
  {
    accessor: "courtId",
    Header: "Court", // TODO link to court
  },
  {
    accessor: "start",
    Header: "Since",
  },
  {
    accessor: "end",
    Header: "To",
  },
  {
    id: "isLesson",
    Header: "Lesson",
    Cell: (cell: CellProps<CourtReservation.Row, never>) => (
      <BoolCell {...cell} value={!!cell.row.original.teacherId} />
    ),
  },
  {
    accessor: "teacherId",
    Header: "Teacher", // TODO: Link to teacher
    Cell: OptionalCell,
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
