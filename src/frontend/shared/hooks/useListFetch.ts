import { BaseModel } from "@models";
import {
  listError,
  listInitial,
  listLoading,
  ListResponse,
  ListState,
  listSuccess,
} from "$/services/types";
import { useToggle } from "shared/hooks/useToggle";
import { useCallback, useEffect, useState } from "react";
import { flow } from "lodash";

interface Props<Item extends BaseModel> {
  list: ListState<Item>;
  refresh: () => void;
}
export const useListFetch = <Item extends BaseModel, Params = undefined>(
  fetch: (params?: Params) => Promise<ListResponse<Item>>,
  dependencies: any[] = [],
  params?: Params
): Props<Item> => {
  const [shouldRefresh, refresh] = useToggle();
  const [state, setState] = useState<ListState<Item>>(listInitial);

  const handleError = useCallback(flow(listError, setState), []);
  const handleSuccess = useCallback(flow(listSuccess, setState), []);
  const handlePending = useCallback(flow(listLoading, setState), []);

  useEffect(() => {
    handlePending();
    fetch(params).then(handleSuccess).catch(handleError);
  }, [...dependencies, shouldRefresh]);

  return { list: { ...state }, refresh } as const;
};
