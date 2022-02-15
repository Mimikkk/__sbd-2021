import { useList } from "shared/hooks";
import { Client, Discount, Price, Reservation, Transaction } from "@models";
import {
  clientService,
  courtReservationService,
  discountService,
  itemReservationService,
  priceService,
  transactionService,
} from "$/services";
import { useEffect, useState } from "react";
import { uuid } from "@internal/types";
import { extend, keyBy } from "lodash";
import { getColumns } from "./columns";

export const useTransactionList = () => {
  const [Items, Context] = useList<Transaction.Row>(transactionService.readAll);

  const [discounts, setDiscounts] = useState<Record<uuid, Discount.Entity>>({});
  useEffect(() => {
    discountService
      .readAll()
      .then(({ items }) => setDiscounts(keyBy(items, "id")));
  }, []);

  const [clients, setClients] = useState<Record<uuid, Client.Entity>>({});
  useEffect(() => {
    clientService.readAll().then(({ items }) => setClients(keyBy(items, "id")));
  }, []);

  const [prices, setPrices] = useState<Record<uuid, Price.Entity>>({});
  useEffect(() => {
    priceService.readAll().then(({ items }) => setPrices(keyBy(items, "id")));
  }, []);

  const [reservations, setReservations] = useState<
    Record<uuid, Reservation.Entity>
  >({});

  useEffect(() => {
    Promise.all([
      courtReservationService.readAll(),
      itemReservationService.readAll(),
    ]).then(([{ items: courts }, { items: items }]) => {
      extend(reservations, keyBy(courts, "id"));
      extend(reservations, keyBy(items, "id"));
      setReservations(reservations);
    });
  }, []);

  return [
    () => (
      <Items
        columns={getColumns({ clients, discounts, prices, reservations })}
        pagination
      />
    ),
    Context,
  ] as const;
};
