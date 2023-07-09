" use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from "./dialog";

interface ModalProps {
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
  description?: string;
  isOpen: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  children,
  onClose,
  description,
  isOpen,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
