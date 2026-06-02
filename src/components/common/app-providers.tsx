"use client";

import type { ReactNode } from "react";
import GlobalLoader from "@/components/common/global-loader";
import { ToastProvider } from "@/components/common/toast-provider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <GlobalLoader>{children}</GlobalLoader>
    </ToastProvider>
  );
}
