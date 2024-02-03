import Head from "next/head";
import { type ReactNode } from "react";
import { Header } from "~/widgets/header/ui";
import { Footer } from "~/widgets/footer/ui";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title key={"title"}>Movies App</title>
        <meta key={"description"} name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={"flex flex-1 flex-col px-[20px] py-[50px]"}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
