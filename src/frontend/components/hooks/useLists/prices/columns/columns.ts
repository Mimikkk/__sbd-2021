import { Column } from "shared/components";
import { Price } from "@models";
import { EditCell } from '../../courts/columns/EditCell';

export const columns: Column<Price.Row>[] = [
  {
    accessor: "cost",
    Header: "Cost",
  },
  {
    accessor: "description",
    Header: "Description",
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
