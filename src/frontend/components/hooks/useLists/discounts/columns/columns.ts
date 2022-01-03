import { BoolCell, Column } from 'shared/components';
import { Discount } from "@models";
import { EditCell } from './EditCell';

export const columns: Column<Discount.Row>[] = [
  {
    accessor: "name",
    Header: "Name",
  },
  {
    accessor: "isPercentage",
    Header: "Is a percentage?",
    Cell: BoolCell
  },
  {
    accessor: "value",
    Header: "Value",
  },
  {
    accessor: "description",
    Header: "Description",
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
