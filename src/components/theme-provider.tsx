"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// yaha se type nikal rahe hain, extra import path ki zaroorat nahi
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider(props: ThemeProviderProps) {
  return <NextThemesProvider {...props} />;
}
