import { useList } from "shared/hooks";
import { Item, ItemReservation } from '@models';
import {
  itemReservationService,
  itemService,
} from '$/services';
import { useEffect, useState } from 'react';
import { uuid } from '@internal/types';
import { keyBy } from 'lodash';
import { getColumns } from './columns';


export const useItemReservationList = () => {
  const [Items, Context] = useList<ItemReservation.Row>(
    itemReservationService.readAll
  );
  const [items, setItems] = useState<Record<uuid, Item.Entity>>({});
  useEffect(() => {itemService.readAll().then(({ items }) => setItems(keyBy(items, "id")));}, []);

  return [() => <Items columns={getColumns({items})} pagination />, Context,] as const;
};