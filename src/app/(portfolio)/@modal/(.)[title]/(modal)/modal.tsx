"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as s from "./style.css";

export function Modal({ children }: { children: React.ReactNode }) {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalRoot(document.getElementById("modal-root"));

    if (children) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [children]);

  if (!modalRoot) return null;

  return createPortal(
    <div className={s.modalOverlay}>
      <div>{children}</div>
    </div>,
    modalRoot
  );
}
