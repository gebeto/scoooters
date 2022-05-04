import React from "react";
import { Dialog } from "evergreen-ui";
// import { Dialog, Transition } from "@headlessui/react";

export type ModalProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactElement;
};

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  return (
    <Dialog
      isShown={open}
      title={title}
      onCloseComplete={onClose}
      confirmLabel="Close"
      hasCancel={false}
    >
      {children}
    </Dialog>
  );
};
