import { BoolCell, Column, OptionalCell } from "shared/components";
import { Employee, Item, ItemReservation } from "@models";

export const columns: Column<Item.Row>[] = [
  {
    accessor: "name",
    Header: "Name",
  },
  {
    accessor: "count",
    Header: "Available",
  },
  {
    accessor: "description",
    Header: "Description",
    Cell: OptionalCell,
  },
];
