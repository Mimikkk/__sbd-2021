import { BaseModel } from "@models";
import { ListResponse } from "@services";
import { FC, useEffect, useMemo, useState } from "react";
import { flow } from "lodash";
import {
  listError,
  listInitial,
  listLoading,
  listSuccess,
  ListState,
} from "$/services/types";
import { useToggle } from "shared/hooks";
import { List, ListProps } from "shared/components";
import { isLoading } from "shared/utils/requests";
import { ListContext } from "shared/contexts";

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
): [FC<Omit<ListProps<Item>, "items" | "loading">>] => {
  const {
    list: { items, status },
    refresh,
  } = useListFetch(fetch);

  return [
    ({ ...props }: Omit<ListProps<Item>, "items" | "loading">) => (
      <ListContext.Provider value={{ refresh }}>
        <List items={items} loading={isLoading(status)} {...props} />
      </ListContext.Provider>
    ),
  ];
};
