"use client";

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

const THEME_STORAGE_KEY = "calendarcn-theme";
const MEDIA_QUERY = "(prefers-color-scheme: dark)";

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

function getStoredTheme(defaultTheme: Theme): Theme {
  if (typeof window === "undefined") {
    return defaultTheme;
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (
    storedTheme === "light" ||
    storedTheme === "dark" ||
    storedTheme === "system"
  ) {
    return storedTheme;
  }

  return defaultTheme;
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia(MEDIA_QUERY).matches ? "dark" : "light";
}

function applyThemeClass(theme: Theme) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  const resolvedTheme = theme === "system" ? getSystemTheme() : theme;

  root.classList.remove("light", "dark");
  root.classList.add(resolvedTheme);
}

function disableTransitionsTemporarily() {
  const style = document.createElement("style");
  style.appendChild(
    document.createTextNode(
      "* { transition: none !important; animation: none !important; }",
    ),
  );

  document.head.appendChild(style);

  window.setTimeout(() => {
    style.remove();
  }, 0);
}

export function ThemeProvider({
  attribute = "class",
  children,
  defaultTheme = "system",
  disableTransitionOnChange = false,
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(() =>
    getStoredTheme(defaultTheme),
  );
  const [resolvedTheme, setResolvedTheme] = React.useState<ResolvedTheme>(
    () => {
      if (defaultTheme === "system" && enableSystem) {
        return getSystemTheme();
      }

      return defaultTheme === "system" ? "light" : defaultTheme;
    },
  );

  React.useEffect(() => {
    if (attribute !== "class") {
      return;
    }

    const nextResolvedTheme =
      theme === "system" && enableSystem ? getSystemTheme() : theme;

    if (disableTransitionOnChange) {
      disableTransitionsTemporarily();
    }

    applyThemeClass(theme);
    setResolvedTheme(
      nextResolvedTheme === "system" ? "light" : nextResolvedTheme,
    );
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [attribute, disableTransitionOnChange, enableSystem, theme]);

  React.useEffect(() => {
    if (!enableSystem) {
      return;
    }

    const mediaQuery = window.matchMedia(MEDIA_QUERY);

    const syncSystemTheme = () => {
      if (theme !== "system") {
        return;
      }

      const nextResolvedTheme = mediaQuery.matches ? "dark" : "light";
      applyThemeClass("system");
      setResolvedTheme(nextResolvedTheme);
    };

    syncSystemTheme();
    mediaQuery.addEventListener("change", syncSystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", syncSystemTheme);
    };
  }, [enableSystem, theme]);

  const setTheme = React.useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
  }, []);

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      resolvedTheme,
      setTheme,
      theme,
    }),
    [resolvedTheme, setTheme, theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }

  return context;
}
