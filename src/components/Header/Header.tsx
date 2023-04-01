/* eslint-disable @typescript-eslint/no-misused-promises */
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  const { data: session } = useSession();

  const isLoggedIn = session?.user ? true : false;

  return (
    // Header
    <header className="absolute flex h-[60px] w-full flex-row items-center justify-between bg-[#1e152c] px-4 py-2">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <div className={`flex flex-row ${styles.logoContainer || ""}`}>
            <div>Better</div>
            <div>Person</div>
            <div>Index</div>
          </div>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-between gap-4">
        {isLoggedIn && <Link href="/dashboard">Dashboard</Link>}
        {isLoggedIn ? (
          <button onClick={() => signOut()}>Logout</button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
