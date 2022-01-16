import { VFC } from "react";
import { ListCellProps } from "shared/components/List/components";
import { Discount } from "@models";
import { formatDiscount } from "shared/utils";

export const DiscountCell: VFC<ListCellProps<Discount.Entity>> = ({ cell }) => (
  <>{formatDiscount(cell.row.original)}</>
);
