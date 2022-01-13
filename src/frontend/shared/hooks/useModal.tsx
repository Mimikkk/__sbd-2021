import { ReactElement, ReactNode, useState } from "react";
import { ModalContext } from "shared/contexts";
import { Modal } from "shared/components/Modal";

export const useModal = (
  component: ReactNode,
  title: string
): readonly [() => ReactElement, () => void] => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return [
    () => (
      <ModalContext.Provider value={{ isOpen, close, open }}>
        <Modal title={title}>{component}</Modal>
      </ModalContext.Provider>
    ),
    open,
  ] as const;
};
