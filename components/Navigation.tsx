import React from "react";

import { Link, Text } from "../kit";

const ROBOTS_ROUTE = "/robots";

export const Navigation = () => (
  <nav className={"navigation"}>
    <Link to={ROBOTS_ROUTE}>
      <Text type={"active"}>Robots</Text>
    </Link>
    <style jsx>
      {`
        .navigation {
          display: flex;
          justify-content: center;
          padding: 5px 0;
        }
      `}
    </style>
  </nav>
);
