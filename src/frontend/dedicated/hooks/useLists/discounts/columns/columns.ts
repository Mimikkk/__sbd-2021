import { Column } from "shared/components";
import { Discount } from "@models";
import { EditCell } from "./EditCell";
import { DiscountCell } from "./DiscountCell";

export const columns: Column<Discount.Row>[] = [
  {
    accessor: "name",
    Header: "Name",
  },
  {
    id: "value",
    Header: "Value",
    Cell: DiscountCell,
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
