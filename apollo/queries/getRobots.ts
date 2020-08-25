import { gql } from "@apollo/client";
export const GET_ROBOTS_QUERY = gql`
  query Robots {
    robots {
      code
      id
    }
  }
`;

export type Robot = {
  code: string;
  id: string;
};

export type RobotsData = {
  robots: Robot[];
};
