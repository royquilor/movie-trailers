import * as Popover from "@radix-ui/react-popover";

const PopoverDemo = ({ children }) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-16 h-16"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
          clipRule="evenodd"
        />
      </svg>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        {children}
        {/* <Popover.Close className="PopoverClose" aria-label="Close">
          <Cross2Icon />
        </Popover.Close> */}
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
