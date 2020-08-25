import "cross-fetch/polyfill";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import withApollo from "next-with-apollo";
import React from "react";

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: "https://hasura.dev.cryptuoso.com/v1/graphql",
      cache: new InMemoryCache({ dataIdFromObject: (object) => object.id as string }).restore(
        initialState || {}
      ),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
