import { gql } from "@apollo/client";

const OVERVIEW_FRAGMENT = gql`
  fragment GetRobotsOverview on robots {
    id
    code
  }
`;

export const ROBOT_OVERVIEW_QUERY = gql`
  query GetRobots {
    robots {
      ...GetRobotsOverview
    }
  }
  ${OVERVIEW_FRAGMENT}
`;

export const ROBOTS_QUERY = gql`
  query GetRobots {
    robots {
      ...GetRobotsOverview
      settings
    }
  }
  ${OVERVIEW_FRAGMENT}
`;

export type RobotOverview = {
  code: string;
  id: string;
};

export type Robot = RobotOverview & { settings: { [id: string]: any } };

export type RobotsOverviewData = {
  robots: RobotOverview[];
};

export type RobotsData = {
  robots: Robot[];
};
