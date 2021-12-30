import { Column } from "shared/components";
import { Transaction } from "@models";
import { EditCell } from '../../courts/columns/EditCell';

export const columns: Column<Transaction.Row>[] = [
  {
    accessor: "clientId",
    Header: "Client",
  },
  {
    accessor: "discountId",
    Header: "Discount",
  },
  {
    accessor: "reservationId",
    Header: "Reservation",
  },
  {
    accessor: "cost",
    Header: "Cost",
  },
  {
    id: "edit",
    Header: "Edit",
    Cell: EditCell,
  },
];
