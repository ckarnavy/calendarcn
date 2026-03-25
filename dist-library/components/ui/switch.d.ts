import { Switch as SwitchPrimitive } from 'radix-ui';
import * as React from "react";
declare function Switch({ className, size, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root> & {
    size?: "xs" | "sm" | "default";
}): import("react/jsx-runtime").JSX.Element;
export { Switch };
