import { Column } from "shared/components";
import { Price } from "@models";

export const columns: Column<Price.Row>[] = [
  {
    accessor: "cost",
    Header: "Cost",
  },
  {
    accessor: "description",
    Header: "Description",
  },
];
