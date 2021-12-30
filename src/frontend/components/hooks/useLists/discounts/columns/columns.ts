import { Column } from "shared/components";
import { Discount } from "@models";
import { EditCell } from '../../courts/columns/EditCell';

export const columns: Column<Discount.Row>[] = [
  {
    accessor: "name",
    Header: "Name",
  },
  {
    accessor: "value",
    Header: "Name",
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
