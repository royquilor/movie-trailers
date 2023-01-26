import * as Popover from "@radix-ui/react-popover";
import { ReactNode } from "react";

const PopoverDemo = ({ children }: { children: ReactNode }) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className="text-white">About</button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent bg-white p-10" sideOffset={5}>
        {children}
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
