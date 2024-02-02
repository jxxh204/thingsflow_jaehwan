import styled from "styled-components";
import Issue from "./Issue";
import { IssueType, useIssueState } from "../useContext";

const IssuesStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
  overflow-y: auto;
`;
function Issues() {
  const state = useIssueState();
  return (
    <IssuesStyle>
      {state?.map((data: IssueType, index) => (
        <Issue key={index} data={data} />
      ))}
    </IssuesStyle>
  );
}

export default Issues;
