import { Column, OptionalCell } from "shared/components";
import { Item } from "@models";

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
