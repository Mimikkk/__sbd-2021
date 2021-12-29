import { Column } from "shared/components";
import { Transaction } from "@models";

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
];
