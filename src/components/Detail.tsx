import styled from "styled-components";
import { useIssueState } from "./useContext";

const DetailStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function Detail() {
  const state = useIssueState();
  state;
  return <DetailStyle>Detail</DetailStyle>;
}

export default Detail;
