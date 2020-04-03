import React from "react";
import Head from "next/head";
import PropTypes from "prop-types"
import AppLayout from "../components/AppLayout";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.1.0/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

NodeBird.prototype = {
  Component : PropTypes.elementType,
}

export default NodeBird;
