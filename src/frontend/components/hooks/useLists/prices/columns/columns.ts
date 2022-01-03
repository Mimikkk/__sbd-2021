import { Column } from "shared/components";
import { Price } from "@models";
import { EditCell } from './EditCell';

export const columns: Column<Price.Row>[] = [
  {
    accessor: "cost",
    Header: "Cost",
  },
  {
    accessor: "description",
    Header: "Service",
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
