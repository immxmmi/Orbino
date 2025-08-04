"use client";

import { ThemeSwitch } from "@/components/theme/theme-switch";

export function ComingSoonHeader() {
  return (
    <header className="fixed top-0 left-0 w-full px-4 py-3 flex items-center justify-end bg-transparent z-50">
      <ThemeSwitch />
    </header>
  );
}