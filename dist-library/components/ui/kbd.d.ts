interface KbdProps extends React.ComponentProps<"kbd"> {
    /** "default" renders with muted background, "ghost" renders with transparent background */
    variant?: "default" | "ghost";
}
declare function Kbd({ className, variant, ...props }: KbdProps): import("react/jsx-runtime").JSX.Element;
declare function KbdGroup({ className, ...props }: React.ComponentProps<"div">): import("react/jsx-runtime").JSX.Element;
export { Kbd, KbdGroup };
