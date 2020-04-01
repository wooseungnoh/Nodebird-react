import React from "react";
import Link from "next/link";
import Head from "next/head"
import AppLayout from "../components/AppLayout";

//메인화면
const Home = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.1.0/antd.css"/>
      </Head>
      <AppLayout>
        <div>Hello, Next!</div>
      </AppLayout>
    </>
  );
};

export default Home;
