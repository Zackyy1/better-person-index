import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "@/utils/api";
import Header from "@/components/Header/Header";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Better Person Index</title>
      </Head>
      
      <div className="fade-in">
        <h1>Want to become a better person? Track your progress here.</h1>
      </div>

    </>
  );
};

export default Home;

