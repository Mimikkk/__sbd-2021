import { CellProps } from "react-table";
import { format } from "date-fns";

export const DateCell = <T extends object>({ value }: CellProps<T>) =>
  value && format(new Date(value), "dd-MM-yyyy  HH:mm");
