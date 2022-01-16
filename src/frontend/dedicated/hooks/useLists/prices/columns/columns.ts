import { BoolCell, Column } from "shared/components";
import { Price } from "@models";
import { EditCell } from "./EditCell";

export const columns: Column<Price.Row>[] = [
  {
    accessor: "cost",
    Header: "Cost",
  },
  {
    accessor: "name",
    Header: "Service",
  },
  {
    accessor: "isItem",
    Header: "Is an item price",
    Cell: BoolCell,
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
