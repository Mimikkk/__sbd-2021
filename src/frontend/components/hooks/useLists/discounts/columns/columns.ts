import { Column } from "shared/components";
import { Discount } from "@models";

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
];
