import { CellProps } from "react-table";
import { format } from "date-fns";

export const formatDate = (value: any) =>
  format(new Date(value), "dd-MM-yyyy  HH:mm");

export const DateCell = <T extends object>({ value }: CellProps<T>) =>
  value && formatDate(value);
