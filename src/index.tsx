import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  InMemoryCache
} from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ValidateOtp from "./Validate";
import Validate from "./Validate";
// import injectStyles from './styles';

// Initialize ApolloClient
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://34.132.154.61:8000/graphql/"
});

// Pass the ApolloClient instance to the ApolloProvider component
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
