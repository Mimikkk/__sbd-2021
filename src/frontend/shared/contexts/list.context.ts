import { noop } from "lodash";
import { useContext } from "react";
import { createContext } from "react";

export interface Props {
  refresh: () => void;
}
const initial: Props = { refresh: noop };

export const ListContext = createContext<Props>(initial);
export const useListContext = (): Props => useContext(ListContext);
