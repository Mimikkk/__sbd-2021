import { Column } from "shared/components";
import { ItemReservation } from "@models";

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
    accessor: "itemId",
    Header: "Item", // TODO: Link to item
  },
];
