import { Column } from "shared/components";
import { Client, Discount, Transaction } from "@models";
import { uuid } from "@internal/types";
import { translate } from "shared/utils/translate";
import { PersonCell } from "shared/components/List/components/cells/PersonCell";
import { formatDiscount } from "shared/utils";

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
    Cell: PersonCell(clients),
  },
  {
    accessor: "discountId",
    Header: "Discount",
    Cell({ value }) {
      const discount = translate(value!, discounts);
      return discount ? formatDiscount(discount) : "-";
    },
  },
];
