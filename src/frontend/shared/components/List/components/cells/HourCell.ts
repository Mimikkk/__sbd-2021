import { CellProps } from "react-table";
import { formatTime } from "shared/utils";

export const HourCell = <T extends object>({ value }: CellProps<T>) =>
  value && formatTime(new Date(value));
