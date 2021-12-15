import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import ExchangeRates from "./components/users/rickandmortyprueba";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  // uri: "https://minsoftprojects.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <ExchangeRates/>
  </ApolloProvider>,
  document.getElementById("root")
);
