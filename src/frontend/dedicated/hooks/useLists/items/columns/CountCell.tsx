import { CellProps } from "react-table";
import { Item } from "@models";
import { VFC } from "react";

export const CountCell: VFC<CellProps<Item.Row, number>> = ({ value, row }) => (
  <>{`${row.original.reserved}/${value}`}</>
);
