import { Column } from "shared/components";
import { ItemReservation } from "@models";
import { EditCell } from '../../courts/columns/EditCell';

export const columns: Column<ItemReservation.Row>[] = [
  {
    accessor: "itemId",
    Header: "Item", // TODO: Link to items
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
    accessor: "count",
    Header: "Count",
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
