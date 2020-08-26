import { useQuery } from "@apollo/client";

import { ROBOTS_QUERY, ROBOT_OVERVIEW_QUERY, RobotsData, RobotsOverviewData } from "./queries";

export const api = {
  getOverview: () => {
    const { data, error, loading } = useQuery<RobotsOverviewData, {}>(ROBOT_OVERVIEW_QUERY);

    return { data, error, loading };
  },
  getRobotById: (id: string) => {
    const { data, error, loading } = useQuery<RobotsData, {}>(ROBOTS_QUERY);
    const byId = data?.robots?.find((robot) => robot.id === id);
    return { data: byId, error, loading };
  },
};
