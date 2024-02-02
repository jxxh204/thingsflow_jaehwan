import styled from "styled-components";
import Issue from "./Issue";
import { IssueType, useIssueState } from "../useContext";

const IssuesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
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
