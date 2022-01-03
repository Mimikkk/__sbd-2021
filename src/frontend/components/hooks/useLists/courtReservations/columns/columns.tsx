import { BoolCell, Column} from 'shared/components';
import { Court, CourtReservation, Employee } from '@models';
import { CellProps } from "react-table";
import { EditCell } from './EditCell';
import { uuid } from '@internal/types';
import { format } from 'date-fns';


interface Props {
  courts: Record<uuid, Court.Entity>;
  teachers: Record<uuid, Employee.Entity>;
}

export const getColumns = ({ courts, teachers }: Props): Column<CourtReservation.Row>[] => [
  {
    accessor: "courtId",
    Header: "Court",
    Cell: ({ value }) => courts[value].name,
  },
  {
    accessor: "start",
    Header: "Since",
    Cell: ({value}) => format(new Date(value), "dd-MM-yyyy  HH:mm")
  },
  {
    accessor: "end",
    Header: "To",
    Cell: ({value}) => format(new Date(value), "dd-MM-yyyy  HH:mm")
  },
  {
    id: "isLesson",
    Header: "Is a lesson",
    Cell: (cell: CellProps<CourtReservation.Row, never>) => (
      <BoolCell {...cell} value={!!cell.row.original.teacherId} />
    ),
  },
  {
    accessor: "teacherId",
    Header: "Teacher",
    Cell: ({ value }) => !!value ? teachers[value].name.concat(' ', teachers[value].surname ) : "-",
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
