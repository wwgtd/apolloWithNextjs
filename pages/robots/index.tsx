import { useQuery } from "@apollo/client";
import React, { useState } from "react";

import { GET_ROBOTS_QUERY } from "../../apollo/queries";
import type { RobotsData } from "../../apollo/queries";
import withApollo from "../../apollo/withApollo";
import { RobotsList } from "../../components";
import { Layout } from "../../components";
import { Pagination } from "../../components/Pagination";

const getRobotsByPage = (robots: RobotsData["robots"], currentPage: number) => {
  const maxPageIdx = currentPage * 10;
  return new Array(10)
    .fill(undefined)
    .map((_, i) => robots[maxPageIdx - i])
    .filter((a) => a);
};

export default withApollo(() => {
  const { data, loading, error } = useQuery<RobotsData, {}>(GET_ROBOTS_QUERY);
  const [currentPage, setCurrentPage] = useState<number>(1);
  if (loading) return null;
  const { robots } = data!;
  const pagesOverall = Math.round(robots.length / 10);
  return (
    <Layout>
      <RobotsList className={"robots_list_wrapper"} robots={getRobotsByPage(robots, currentPage)} />
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
