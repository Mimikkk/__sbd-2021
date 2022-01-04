import { List, ListProps } from "shared/components/List";
import { isLoading } from "shared/utils/requests";
import { ListResponse } from "$/services/types";
import { ListContext } from "shared/contexts";
import { useListFetch } from "shared/hooks";
import { FC, useCallback } from "react";
import { BaseModel } from "@models";

export const useList = <Item extends BaseModel, Params = undefined>(
  fetch: (params?: Params) => Promise<ListResponse<Item>>
): [FC<Omit<ListProps<Item>, "items" | "loading">>, FC] => {
  const {
    list: { items, status },
    refresh,
  } = useListFetch(fetch);

  const ListComponent = useCallback(
    ({ ...props }: Omit<ListProps<Item>, "items" | "loading">) => (
      <List items={items} loading={isLoading(status)} {...props} />
    ),
    [items]
  );

  const ContextProvider = useCallback(
    ({ children }) => (
      <ListContext.Provider value={{ refresh, items }}>
        {children}
      </ListContext.Provider>
    ),
    [items]
  );

  return [ListComponent, ContextProvider];
};
