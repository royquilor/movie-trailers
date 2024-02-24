"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";

const AboutDialog = ({
  text,
  children,
}: {
  text: string;
  children: ReactNode;
}) => (
  <Dialog.Root>
    <Dialog.Trigger className="text-white text-sm font-semibold outline-none">
      {text}
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay bg-slate-900/50 transition-all backdrop-blur-2xl fixed inset-0 z-30" />
      <Dialog.Content className="DialogContent bg-white -translate-x-2/4 -translate-y-2/4 text-lg shadow-xl fixed z-40 top-1/2 left-1/2 w-full xl:w-[90vw] max-w-xl p-6 rounded-3xl max-h-[85vh] focus:outline-none">
        {children}
        <Dialog.Title className="DialogTitle sr-only">About</Dialog.Title>
        <Dialog.Description />
        <Dialog.Close className="absolute" />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default AboutDialog;
