import { Court, Scheduler } from "@models";
import { HourCell } from "shared/components";
import { CourtCell } from "./cells";
import { map, range } from "lodash";

const createSchedulerTimeColumn = (): Scheduler.Column => ({
  accessor: "time",
  Header: "Czas",
  Cell: HourCell,
  width: 40,
});

const createSchedulerCourtColumn = (index: number): Scheduler.Column => ({
  accessor: `selected`,
  Header: `Kort ${index + 1}`,
  id: `${index}`,
  Cell: CourtCell(index),
});

export const createColumns = ({
  length,
}: Court.Entity[]): Scheduler.Column[] => [
  createSchedulerTimeColumn(),
  ...map(range(length), createSchedulerCourtColumn),
];
