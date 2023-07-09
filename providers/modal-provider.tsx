"use client";

import { useEffect, useState } from "react";
import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMouted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMouted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
