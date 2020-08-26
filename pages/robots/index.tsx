import React, { useState } from "react";

import { api } from "../../apollo/api";
import { RobotsOverviewData } from "../../apollo/queries";
import withApollo from "../../apollo/withApollo";
import { RobotsList } from "../../components";
import { Layout } from "../../components";
import { Pagination } from "../../components/robots/Pagination";
import { Text } from "../../kit";

const getRobotsByPage = (robots: RobotsOverviewData["robots"], currentPage: number) => {
  const maxPageIdx = currentPage * 10;
  return new Array(10)
    .fill(undefined)
    .map((_, i) => robots[maxPageIdx - i])
    .filter((a) => a);
};

const RobotsPage = withApollo(() => {
  const { data, loading, error } = api.getOverview();
  const [currentPage, setCurrentPage] = useState<number>(1);
  if (loading) return null;
  const { robots } = data!;
  const pagesOverall = Math.round(robots.length / 10);
  return (
    <Layout>
      <RobotsList className={"robots_list_wrapper"} robots={getRobotsByPage(robots, currentPage)} />
      {error && <Text type={"error"}>{error}</Text>}
      <div className={"pagination_wrapper"}>
        <Pagination total={pagesOverall} current={currentPage} setCurrent={setCurrentPage} />
      </div>
      <style>
        {`
            .robots_list_wrapper {
                margin: 10px;
                flex-grow: 2;
            }
            .pagination_wrapper {
                
                width: 500px;
                margin: 0 auto;
              padding: 30px;
            }
          `}
      </style>
    </Layout>
  );
});

export default RobotsPage;
