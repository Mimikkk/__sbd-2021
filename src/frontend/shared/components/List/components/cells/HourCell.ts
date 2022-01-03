import { CellProps } from "react-table";
import { format } from "date-fns";

export const HourCell = <T extends object>({ value }: CellProps<T>) =>
  value && format(new Date(value), "HH:mm");
