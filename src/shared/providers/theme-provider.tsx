import { NextUIProvider } from "@nextui-org/react";
import { type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default ThemeProvider;
