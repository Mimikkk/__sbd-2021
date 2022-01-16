import { ListCellProps } from "shared/components/List/components";
import { formatPrice } from "shared/utils";

import { TypedKeys } from "@internal/types";

export const PriceCell =
  <T extends object>(accessor: TypedKeys<T, number>) =>
  ({ cell }: ListCellProps<T>) =>
    formatPrice(cell.row.original[accessor as keyof T] as any);
