import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { api } from "../../../apollo/api";
import { Robot } from "../../../apollo/queries";
import withApollo from "../../../apollo/withApollo";
import { Layout } from "../../../components";
import RobotInfo from "../../../components/robots/robot/RobotInfo";
import SettingsInputs from "../../../components/robots/robot/SettingsForm";
import { Text } from "../../../kit";

export default withApollo(() => {
  const {
    query: { id },
  } = useRouter();
  const { data, error, loading } = api.getRobotById(id as string);
  const [settings, setSettings] = useState<Robot["settings"] | undefined>({ ...data?.settings });
  console.log(settings);
  useEffect(() => {
    setSettings(data?.settings);
  }, [data]);
  if (!settings || loading) return null;
  return (
    <Layout>
      <div className={"robot-page"}>
        {error && <Text type={"error"}>{error}</Text>}
        <RobotInfo code={data!.code} id={data!.id} settings={settings!} />
        <SettingsInputs settings={settings!} setSettings={setSettings} />
        <style jsx>{`
          .robot-page {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
        `}</style>
      </div>
    </Layout>
  );
});
