import { Column } from "shared/components";
import { CourtReservation } from "@models";

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
    accessor: "isLesson",
    Header: "Is a lesson",
  },
  {
    accessor: "teacherId",
    Header: "Teacher", // TODO: Link to teacher
  },
];
