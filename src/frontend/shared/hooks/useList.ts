import { BaseModel } from "@models";
import { ListResponse } from "@services";
import { useEffect, useMemo, useState } from "react";
import { flow } from "lodash";
import {
  listError,
  listInitial,
  listLoading,
  listSuccess,
  ListState,
} from "$/services/types";

export const useList = <Item extends BaseModel, Params = undefined>(
  handleItems: (params?: Params) => Promise<ListResponse<Item>>,
  params?: Params,
  ...dependencies: any[]
): ListState<Item> => {
  const [state, setState] = useState<ListState<Item>>(listInitial);

  const handleError = useMemo(() => flow(listError, setState), []);
  const handleSuccess = useMemo(() => flow(listSuccess, setState), []);
  const handlePending = useMemo(() => flow(listLoading, setState), []);

  useEffect(() => {
    handlePending();
    handleItems(params).then(handleSuccess).catch(handleError);
  }, dependencies);

  return { ...state } as const;
};
