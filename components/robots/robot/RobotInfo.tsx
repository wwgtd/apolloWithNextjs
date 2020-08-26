import React from "react";

import { Robot } from "../../../apollo/queries";
import { Text } from "../../../kit";

const Settings = ({ settings }: { settings: Robot["settings"] }) => (
  <div className={"settings-node"}>
    {Object.entries(settings).map(([name, val]) => {
      if (typeof val !== "object") {
        return (
          <div key={name} className={"settings-node__item"}>
            <Text size={"l"} bold>
              {name}
            </Text>
            <div>
              <Text>{val}</Text>
            </div>
          </div>
        );
      } else
        return (
          <React.Fragment key={name}>
            <Text size={"l"} bold>
              {name}:
            </Text>
            <Settings settings={val} />
          </React.Fragment>
        );
    })}
    <style jsx>
      {`
        .settings-node {
          padding-left: 40px;
        }

        .settings-node__item {
          padding: 5px 0;
        }
      `}
    </style>
  </div>
);

const RobotInfo = ({
  settings,
  code,
  id,
}: {
  settings: Robot["settings"];
  code: Robot["code"];
  id: Robot["id"];
}) => (
  <div className={"robot-info column"}>
    {Object.entries({ code, id }).map(([name, val]) => (
      <div key={name} className={"robot-info__heading"}>
        <Text size={"l"} bold>
          {name}
        </Text>
        <div>
          <Text>{val}</Text>
        </div>
      </div>
    ))}
    <div className={"robot-info__heading"}>
      <Text size={"l"} bold>
        settings
      </Text>
      <div>
        <Settings settings={settings} />
      </div>
    </div>
    <style jsx>
      {`
        .robot-info__heading {
          padding: 40px;
        }

        .robot-info__heading > * {
          padding: 5px 0;
        }

        .column {
          display: flex;
          flex-flow: column;
        }

        .robot-info {
          min-width: 300px;
          width: 40%;

          margin: 0 auto;
        }
      `}
    </style>
  </div>
);

export default RobotInfo;
