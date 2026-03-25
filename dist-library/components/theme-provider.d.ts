import * as React from "react";
type Theme = "light" | "dark" | "system";
type ResolvedTheme = Exclude<Theme, "system">;
interface ThemeProviderProps {
    attribute?: "class";
    children: React.ReactNode;
    defaultTheme?: Theme;
    disableTransitionOnChange?: boolean;
    enableSystem?: boolean;
}
interface ThemeContextValue {
    resolvedTheme: ResolvedTheme;
    setTheme: (theme: Theme) => void;
    theme: Theme;
}
export declare function ThemeProvider({ attribute, children, defaultTheme, disableTransitionOnChange, enableSystem, }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useTheme(): ThemeContextValue;
export {};
