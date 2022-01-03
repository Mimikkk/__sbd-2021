import { CellProps } from "react-table";

export const OptionalCell = <T extends object>({ value }: CellProps<T>) =>
  <>{value ? value : "-"}</>;