import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Learn
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent p-10 text-slate-900">
            Yes
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Overview
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent p-10 text-slate-900">
            Hello
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Contact
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent p-10 text-slate-900">
            Say hello
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

// const ListItem = React.forwardRef(
//   ({ className, children, title, ...props }, forwardedRef) => (
//     <li>
//       <NavigationMenu.Link asChild>
//         <a
//           className={classNames("ListItemLink", className)}
//           {...props}
//           ref={forwardedRef}
//         >
//           <div className="ListItemHeading">{title}</div>
//           <p className="ListItemText">{children}</p>
//         </a>
//       </NavigationMenu.Link>
//     </li>
//   )
// );

export default NavigationMenuDemo;
