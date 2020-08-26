import React from "react";

import type { RobotOverview } from "../../apollo/queries";
import { Link, RobotIcon, Text } from "../../kit";

const urlToRobot = (id: string) => `/robots/robot/${id}`;

export const RobotsList = ({
  robots,
  className = "",
}: {
  className?: string;
  robots: RobotOverview[];
}) => (
  <div className={`robot_list ${className}`}>
    {robots.map((i) => (
      <Link key={i.id} to={urlToRobot(i.id)}>
        {(onClick) => (
          <div className={"robot_info"} onClick={onClick}>
            <div className={"robot_icon_wrapper"}>
              <RobotIcon />
            </div>
            {Object.entries(i)
              .filter(([name]) => name.indexOf("__") === -1)
              .map(([name, val]) => (
                <div key={name} className={"robot_info_item"}>
                  <div className={"robot_info_item_name"}>
                    <Text>{name}:</Text>
                  </div>
                  <div>
                    <Text>{val}</Text>
                  </div>
                </div>
              ))}
          </div>
        )}
      </Link>
    ))}
    <style jsx>
      {`
        .robot_icon_wrapper {
          display: flex;
          justify-content: center;
          padding: 5px 0;
        }
        .robot_list {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .robot_info_item {
          display: flex;
          padding: 10px 0;
        }

        .robot_info_item_name {
          width: 50px;
        }

        .robot_info {
          display: flex;
          flex-flow: column;
          cursor: pointer;
          justify-items: center;
          width: 500px;
          margin: 10px;
          border: 1px solid black;
          padding: 10px;
        }
      `}
    </style>
  </div>
);
