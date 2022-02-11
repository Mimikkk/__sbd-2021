import { Column, OptionalCell } from "shared/components";
import { Item } from "@models";
import { EditCell } from "./EditCell";
import { CountCell } from "./CountCell";

export const columns: Column<Item.Row>[] = [
  {
    accessor: "name",
    Header: "Name",
  },
  {
    accessor: "count",
    Header: "Available",
    Cell: CountCell,
  },
  {
    accessor: "description",
    Header: "Description",
    Cell: OptionalCell,
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
