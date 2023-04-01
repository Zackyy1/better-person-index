import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "@/utils/api";

import "@/styles/global.scss";
import Header from "@/components/Header/Header";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Header />
      <div className="bg-gradient-to-b from-[#130d16] to-[#1e152c] ">
        <main className="mx-auto flex min-h-screen max-w-[1080px] flex-col items-center justify-center px-4 pt-[60px]">
          <Component {...pageProps} />
        </main>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
