import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { Agentation } from "agentation";

import appFontsCss from "@/styles/app-fonts.css?url";
import { ThemeProvider } from "@/components/theme-provider";
import appCss from "@/styles/globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    links: [
      { href: appFontsCss, rel: "stylesheet" },
      { rel: "icon", href: "/favicon.ico" },
      { href: appCss, rel: "stylesheet" },
    ],
    meta: [
      { charSet: "utf-8" },
      {
        content:
          "A beautifully crafted calendar component for React. Built with shadcn/ui and Tailwind CSS, inspired by Notion Calendar. Features week view, dark mode, event colors, and more.",
        name: "description",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
      {
        content:
          "calendar, react, tanstack router, tanstack start, shadcn, tailwind, open source, notion calendar, week view, dark mode",
        name: "keywords",
      },
      {
        title: "CalendarCN - Beautiful Open Source Calendar for React",
      },
      {
        content: "CalendarCN - Beautiful Open Source Calendar for React",
        property: "og:title",
      },
      {
        content:
          "A beautifully crafted calendar component built with shadcn/ui and Tailwind CSS, inspired by Notion Calendar. Week view, dark mode, and more.",
        property: "og:description",
      },
      {
        content: "website",
        property: "og:type",
      },
      {
        content: "https://calendarcn.vercel.app",
        property: "og:url",
      },
      {
        content: "/og-image.png",
        property: "og:image",
      },
      {
        content: "summary_large_image",
        name: "twitter:card",
      },
      {
        content: "CalendarCN - Beautiful Open Source Calendar for React",
        name: "twitter:title",
      },
      {
        content:
          "A beautifully crafted calendar component built with shadcn/ui and Tailwind CSS, inspired by Notion Calendar. Week view, dark mode, and more.",
        name: "twitter:description",
      },
      {
        content: "/og-image.png",
        name: "twitter:image",
      },
      {
        content: "@mevmnog",
        name: "twitter:creator",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Outlet />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </ThemeProvider>
    </RootDocument>
  );
}

interface RootDocumentProps {
  children: React.ReactNode;
}

function RootDocument({ children }: RootDocumentProps) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <HeadContent />
      </head>
      <body className="h-full font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
