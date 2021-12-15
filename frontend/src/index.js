import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  // uri: "https://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

const DATOS = gql`
  {
    characters {
      results {
        id
        name
      }
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(DATOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map((item) => {
    return(
      <div>
        <p key={item.id}>{item.name}</p>
      </div>
    )
  })

}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <ExchangeRates/>
  </ApolloProvider>,
  document.getElementById("root")
);
