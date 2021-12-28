import { BoolCell, Column } from "shared/components";
import { EditCell } from "./EditCell";
import { Court } from "@models";

export const columns: Column<Court.Row>[] = [
  {
    accessor: "name",
    Header: "Name",
  },
  {
    accessor: "floor",
    Header: "Floor type",
  },
  {
    accessor: "isCovered",
    Header: "Cover",
    Cell: BoolCell,
  },
  {
    accessor: "isUnderMaintenance",
    Header: "Available",
    Cell: BoolCell,
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
