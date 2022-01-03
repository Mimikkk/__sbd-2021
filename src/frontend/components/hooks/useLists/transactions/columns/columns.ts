import { Column } from "shared/components";
import { Client, Discount, Transaction } from "@models";
import { EditCell } from "./EditCell";
import { uuid } from "@internal/types";

interface Props {
  clients: Record<uuid, Client.Entity>;
  discounts: Record<uuid, Discount.Entity>;
}

export const getColumns = ({
  clients,
  discounts,
}: Props): Column<Transaction.Row>[] => [
  {
    accessor: "clientId",
    Header: "Client",
    Cell: ({ value }) =>
      clients?.[value].name.concat(" ", clients[value].surname) || "",
  },
  {
    accessor: "reservationId",
    Header: "Reservation",
  },
  {
    accessor: "discountId",
    Header: "Discount",
    Cell: ({ value }) =>
      value && discounts[value] ? discounts[value].name : "-",
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
