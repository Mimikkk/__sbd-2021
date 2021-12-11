import { createContext, useContext } from "react";
import { noop } from "lodash";

interface Props {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}
const initial: Props = { isOpen: false, open: noop, close: noop };

export const ModalContext = createContext<Props>(initial);

export const useModalContext = (): Props => useContext(ModalContext);
