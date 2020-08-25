import { ApolloClient, NormalizedCacheObject, gql } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";

import withApollo from "../../../apollo/withApollo";

export default withApollo(({ apollo }) => {
  const {
    query: { id },
  } = useRouter();
  if (!id) return null;
  const a = apollo.readFragment({
    id,
    fragment: gql`
      fragment Robot on Robots {
        id
        code
      }
    `,
  });

  return <div>{a}123</div>;
});
