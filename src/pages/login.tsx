/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import googleIcon from "@/assets/google.svg";
import Image from "next/image";
import Head from "next/head";
import { signIn } from "next-auth/react";
const login = () => {
  return (
    <>
    <Head>
        <title>Login | Better Person Index</title>
    </Head>
    <div className="border border-slate-600 p-8 rounded-xl">
      <h1 className="text-center">Login</h1>
      <button className="my-8 flex flex-row items-center gap-4 border border-slate-600/70 rounded-md px-4 py-2" onClick={async () => await signIn("google", { callbackUrl: "/dashboard" })}>
        <Image src={googleIcon} alt="Google" width={32} height={32} />
        Log in with Google
      </button>
    </div>
    </>
  );
};

export default login;
