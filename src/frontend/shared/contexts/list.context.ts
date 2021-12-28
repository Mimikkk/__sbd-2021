import { noop } from "lodash";
import { useContext } from "react";
import { createContext } from "react";

export interface Props<T = any> {
  refresh: () => void;
  items: T[];
}
const initial: Props = { refresh: noop, items: [] };

export const ListContext = createContext<Props>(initial);
export const useListContext = <T>(): Props<T> => useContext(ListContext);
