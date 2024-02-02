import styled from "styled-components";
import Issue from "./Issue";
import { IssueType, useIssueState } from "../useContext";
import { useNavigate } from "react-router-dom";

const IssuesStyle = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 92%;
  overflow-y: auto;
`;
function Issues() {
  const state = useIssueState();
  const navigate = useNavigate();
  const navigateHandler = (issueNumber: number) => {
    navigate(`/issue/${issueNumber}`);
  };
  return (
    <IssuesStyle>
      {state?.map((data: IssueType, index) => (
        <Issue
          key={index}
          data={data}
          onClickHandler={() => {
            navigateHandler(data.number);
          }}
        />
      ))}
    </IssuesStyle>
  );
}

export default Issues;
