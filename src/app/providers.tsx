"use client";

import type React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { Provider as ReduxProvider } from "react-redux";
import { SearchProvider } from "@/contexts/searchContext";
import { store } from "@/store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SearchProvider>{children}</SearchProvider>
        </ThemeProvider>
      </SessionProvider>
    </ReduxProvider>
  );
}
