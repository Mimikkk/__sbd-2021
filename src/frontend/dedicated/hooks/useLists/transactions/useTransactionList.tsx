import { useList } from "shared/hooks";
import { Client, Discount, Transaction } from '@models';
import { clientService, discountService, transactionService } from '$/services';
import { useEffect, useState } from 'react';
import { uuid } from '@internal/types';
import { keyBy } from 'lodash';
import { getColumns } from './columns';

export const useTransactionList = () => {
  const [Items, Context] = useList<Transaction.Row>(transactionService.readAll);

  const [discounts, setDiscounts] = useState<Record<uuid, Discount.Entity>>({});
  useEffect(() => {discountService.readAll().then(({ items }) => setDiscounts(keyBy(items, "id")));}, []);

  const [clients, setClients] = useState<Record<uuid, Client.Entity>>({});
  useEffect(() => {clientService.readAll().then(({ items }) => setClients(keyBy(items, "id")));}, []);

  return [() => <Items columns={getColumns({clients, discounts})} pagination />, Context,] as const;
};
