import { CellProps } from "react-table";
import { uuid } from "@internal/types";

export const IntegralCell =
  <T extends object>(items: Record<uuid, T>, field: keyof T) =>
  ({ value }: CellProps<T, uuid>) =>
    items[value]?.[field] || "lol";
