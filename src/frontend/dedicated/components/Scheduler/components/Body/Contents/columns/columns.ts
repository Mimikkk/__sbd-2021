import { Court, Scheduler } from "@models";
import { HourCell } from "shared/components";
import { CourtCell } from "./cells";

const timeColumn = (): Scheduler.Column => ({
  accessor: "time",
  Header: "Czas",
  Cell: HourCell,
  width: 40,
});
const courtColumn = (court: Court.Entity, index: number): Scheduler.Column => ({
  accessor: `selected`,
  Header: `Kort - ${court.name}`,
  id: `${index}`,
  Cell: CourtCell,
});

export const createColumns = (courts: Court.Entity[]): Scheduler.Column[] => [
  timeColumn(),
  ...courts.map(courtColumn),
];
