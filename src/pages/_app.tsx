import { type AppType } from "next/dist/shared/lib/utils";

import "~/app/styles/globals.css";
import { ThemeProvider } from "~/shared/providers";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
