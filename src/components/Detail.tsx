import styled from "styled-components";
import { useIssueState, IssueType } from "./useContext";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function Detail() {
  const location = useLocation();
  const state = useIssueState();
  const [detail, setDetail] = useState<IssueType>();

  useEffect(() => {
    const parsing = Number(location.pathname.split("/")[2]);
    const data = state.filter((i) => i.number === parsing);
    const set = data[0];
    setDetail(set);
  }, []);

  return (
    <DetailStyle>
      <div>{detail?.number}</div>
    </DetailStyle>
  );
}

export default Detail;
