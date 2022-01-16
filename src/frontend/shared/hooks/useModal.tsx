import { ReactElement, ReactNode, useState } from "react";
import { ModalContext } from "shared/contexts";
import { Modal } from "shared/components/Modal";
import { Breakpoint } from "@mui/material";

export const useModal = (
  component: ReactNode,
  title: string,
  maxWidth: Breakpoint = "xs"
): readonly [() => ReactElement, () => void] => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return [
    () => (
      <ModalContext.Provider value={{ isOpen, close, open }}>
        <Modal title={title} open={false} maxWidth={maxWidth}>
          {component}
        </Modal>
      </ModalContext.Provider>
    ),
    open,
  ] as const;
};
