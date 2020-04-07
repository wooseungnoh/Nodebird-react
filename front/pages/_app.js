import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import AppLayout from "../components/AppLayout";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import reducer from "../reducers";
import { applyMiddleware, compose, createStore } from "redux";

const NodeBird = ({ Component, store }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

NodeBird.prototype = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
};

export default withRedux((initialState, options) => {
  //store 커스터마이징
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  );
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(NodeBird);
