"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Toaster, toast } from "sonner";
export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function NextUIProviders({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <Toaster position="bottom-center" />
      {children}
    </NextUIProvider>
  );
}
