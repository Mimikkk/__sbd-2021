import { BaseModel } from "@models";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { flow } from "lodash";
import {
  listError,
  listInitial,
  listLoading,
  listSuccess,
  ListState,
  ListResponse,
} from "$/services/types";
import { useToggle } from "shared/hooks";
import { isLoading } from "shared/utils/requests";
import { ListContext } from "shared/contexts";
import { List, ListProps } from "shared/components/List";

interface UseListProps<Item extends BaseModel> {
  list: ListState<Item>;
  refresh: () => void;
}
const useListFetch = <Item extends BaseModel, Params = undefined>(
  fetch: (params?: Params) => Promise<ListResponse<Item>>,
  dependencies: any[] = [],
  params?: Params
): UseListProps<Item> => {
  const [shouldRefresh, refresh] = useToggle();
  const [state, setState] = useState<ListState<Item>>(listInitial);

  const handleError = useMemo(() => flow(listError, setState), []);
  const handleSuccess = useMemo(() => flow(listSuccess, setState), []);
  const handlePending = useMemo(() => flow(listLoading, setState), []);

  useEffect(() => {
    handlePending();
    fetch(params).then(handleSuccess).catch(handleError);
  }, [...dependencies, shouldRefresh]);

  return { list: { ...state }, refresh } as const;
};

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
