import { Column } from 'shared/components';
import { Item, ItemReservation } from '@models';
import { EditCell } from './EditCell';
import { format } from 'date-fns';
import { uuid } from '@internal/types';


interface Props {
  items: Record<uuid, Item.Entity>;
}

export const getColumns = ({items}: Props): Column<ItemReservation.Row>[] => [
  {
    accessor: "itemId",
    Header: "Item", // TODO: Link to items
    Cell: ({ value }) => items[value].name,
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
    accessor: "count",
    Header: "Count",
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];