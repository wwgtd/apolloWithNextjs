import { gql } from "@apollo/client";
export const GET_ROBOT_QUERY = gql`
  query GetRobot($id: Int) {
    robots(id: $id) {
      id
      code
      settings
    }
  }
`;

export type d = {
  code: string;
  id: string;
  settings: any;
};
