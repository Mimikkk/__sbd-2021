import { Column, formatDate } from "shared/components";
import { Client, Discount, Price, Reservation, Transaction } from "@models";
import { uuid } from "@internal/types";
import { translate } from "shared/utils/translate";
import { PersonCell } from "shared/components/List/components/cells/PersonCell";
import { formatDiscount, formatPrice } from "shared/utils";
import { differenceInMinutes } from "date-fns";

interface Props {
  clients: Record<uuid, Client.Entity>;
  discounts: Record<uuid, Discount.Entity>;
  prices: Record<uuid, Price.Entity>;
  reservations: Record<uuid, Reservation.Entity>;
}

export const getColumns = ({
  clients,
  discounts,
  prices,
  reservations,
}: Props): Column<Transaction.Row>[] => [
  {
    accessor: "clientId",
    Header: "Client",
    Cell: PersonCell(clients),
  },
  {
    accessor: "discountId",
    Header: "Discount",
    Cell: ({ value }) => {
      const discount = translate(value!, discounts);
      return discount?.name || "-";
    },
  },
  {
    id: "discount-value",
    Header: "Discount Value",
    Cell: ({ row }: any) => {
      const discount = translate(row.original!.discountId, discounts);
      return discount ? formatDiscount(discount) : "-";
    },
  },
  {
    accessor: "priceId",
    Header: "Service",
    Cell: ({ value }) => {
      const price = translate(value!, prices);
      return price ? price.name : "-";
    },
  },
  {
    id: "cost",
    Header: "Cost",
    Cell: ({ row }: any) => {
      const reservation = translate(row.original!.reservationId, reservations);
      const discount = translate(row.original!.discountId, discounts);
      const price = translate(row.original!.priceId, prices);
      let cost = price?.cost || 0;

      if (reservation && price && !price.isItem) {
        cost *= differenceInMinutes(reservation.end, reservation.start) / 30;
      }

      if (reservation && discount && price) {
        const discountValue = discount
          ? discount.isPercentage
            ? discount.value / 100
            : discount.value
          : 0;

        return formatPrice(
          cost - (discount.isPercentage ? cost * discountValue : discountValue)
        );
      }

      return price ? formatPrice(cost) : "-";
    },
  },
  {
    id: "reservation-start",
    Header: "Start",
    Cell: ({ row }: any) => {
      const reservation = translate(row.original!.reservationId, reservations);
      return reservation ? formatDate(reservation.start) : "-";
    },
  },
  {
    id: "reservation-end",
    Header: "End",
    Cell: ({ row }: any) => {
      const reservation = translate(row.original!.reservationId, reservations);
      return reservation ? formatDate(reservation.end) : "-";
    },
  },
];
