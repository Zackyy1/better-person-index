import GeneralCalendar from "@/components/Calendar/Calendar";
import ProtectedPage from "@/components/ProtectedPage";
import Head from "next/head";
import React from "react";

const Dashboard = () => {
  return (
    <ProtectedPage>
      <Head>
        <title>Login | Better Person Index</title>
      </Head>
      <div>
        <h1>Are you a better person today, than you were yesterday?</h1>
        <GeneralCalendar />
      </div>
    </ProtectedPage>
  );
};

export default Dashboard;
