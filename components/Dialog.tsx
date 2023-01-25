"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";

const DialogDemo = ({ children }: { children: ReactNode }) => (
  <Dialog.Root>
    <Dialog.Trigger className="bg-black/50 py-3 px-10 text-lg font-semibold rounded-full text-white inline-flex items-center justify-center outline-none focus:outline-none mb-8">
      Play
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay bg-slate-900/50 fixed inset-0 z-30" />
      <Dialog.Content className="DialogContent -translate-x-2/4 -translate-y-2/4 shadow-xl fixed z-40 top-1/2 left-1/2 w-[90vw] max-w-7xl max-h-[85vh] focus:outline-none">
        {children}
        <Dialog.Title className="DialogTitle sr-only">Tweet</Dialog.Title>
        <Dialog.Description />
        <Dialog.Close className="absolute" />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
