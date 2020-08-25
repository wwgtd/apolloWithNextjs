import { Layout } from "../components";
import { Text } from "../kit";

export default () => (
  <Layout>
    <div className={"startPage"}>
      <Text size={"l"}>&#9757;&nbsp;</Text>
      <Text type={"neutral"}>Click the button</Text>
      <Text size={"l"}>&nbsp;&#9757;</Text>
    </div>
    <style jsx>
      {`
        .startPage {
          padding-top: 20px;
          align-self: center;
        }
      `}
    </style>
  </Layout>
);
