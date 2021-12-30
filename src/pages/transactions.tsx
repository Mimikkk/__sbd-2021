import { Button, Tile } from "shared/components";
import {
  clientService,
  discountService,
  reservationService,
  transactionService,
} from "@services";
import { useListContext } from "shared/contexts";
import { Client, Discount, Item, Reservation } from "@models";
import faker from "faker";
import { useTransactionList } from "components/hooks";
import { useEffect, useState } from "react";
import { isEmpty, sample } from "lodash";

export const CreateTransactionButton = () => {
  const [discounts, setDiscounts] = useState<Discount.Entity[]>([]);

  useEffect(() => {
    discountService.readAll().then(({ items }) => setDiscounts(items));
  }, []);

  const [clients, setClients] = useState<Client.Entity[]>([]);

  useEffect(() => {
    clientService.readAll().then(({ items }) => setClients(items));
  }, []);

  const [reservations, setReservations] = useState<Reservation.Entity[]>([]);

  useEffect(() => {
    reservationService.readAll().then(({ items }) => setReservations(items));
  }, []);

  const { refresh } = useListContext();

  return (
    <Button
      title={`Create c:${clients.length} d:${discounts.length} r:${reservations.length} random`}
      onClick={async () => {
        await transactionService.create({
          cost: faker.commerce.price() as any,
          clientId: sample(clients)!.id,
          reservationId: sample(reservations)!.id,
        });
        refresh();
      }}
    />
  );
};
export const EditTransactionButton = () => {
  const [discounts, setDiscounts] = useState<Discount.Entity[]>([]);

  useEffect(() => {
    discountService.readAll().then(({ items }) => setDiscounts(items));
  }, []);

  const [clients, setClients] = useState<Client.Entity[]>([]);

  useEffect(() => {
    clientService.readAll().then(({ items }) => setClients(items));
  }, []);

  const [reservations, setReservations] = useState<Reservation.Entity[]>([]);

  useEffect(() => {
    reservationService.readAll().then(({ items }) => setReservations(items));
  }, []);
  const { refresh, items } = useListContext<Item.Row>();

  return (
    <Button
      title={`Update t:${items.length} c:${clients.length} d:${discounts.length} r:${reservations.length} random`}
      onClick={async () => {
        await transactionService.update(sample(items)!.id, {
          cost: faker.commerce.price() as any,
          clientId: sample(clients)!.id,
          reservationId: sample(reservations)!.id,
          discountId: sample(discounts)!.id,
        });
        refresh();
      }}
      disabled={isEmpty(items)}
    />
  );
};
export const DeleteTransactionButton = () => {
  const { refresh, items } = useListContext<Item.Row>();

  return (
    <Button
      title={`Delete t:${items.length} random`}
      onClick={() => transactionService.delete(sample(items)!.id).then(refresh)}
      disabled={isEmpty(items)}
    />
  );
};

export default () => {
  const [TransactionList, TransactionListContext] = useTransactionList();

  return (
    <Tile>
      <TransactionListContext>
        <TransactionList />
        <CreateTransactionButton />
        <EditTransactionButton />
        <DeleteTransactionButton />
      </TransactionListContext>
    </Tile>
  );
};
