import { type AppType } from "next/dist/shared/lib/utils";

import "~/app/styles/globals.css";
import { QueryProvider, ThemeProvider } from "~/shared/providers";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryProvider>
  );
};

export default MyApp;
