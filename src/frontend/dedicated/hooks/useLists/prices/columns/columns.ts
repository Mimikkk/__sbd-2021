import { BoolCell, Column } from "shared/components";
import { Price } from "@models";
import { EditCell } from "./EditCell";
import { PriceCell } from "dedicated/hooks/useLists/employees/columns/PriceCell";

export const columns: Column<Price.Row>[] = [
  {
    accessor: "cost",
    Header: "Cost",
    Cell: PriceCell("cost"),
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
