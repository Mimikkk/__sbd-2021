import { Column, DateCell, IntegralCell } from "shared/components";
import { Item, ItemReservation } from "@models";
import { uuid } from "@internal/types";

interface Props {
  items: Record<uuid, Item.Entity>;
}

export const getColumns = ({ items }: Props): Column<ItemReservation.Row>[] => [
  {
    accessor: "itemId",
    Header: "Item",
    Cell: IntegralCell(items, "name"),
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
    accessor: "count",
    Header: "Count",
  },
];
