import styled from "styled-components";
import { useIssueState, IssueType } from "./useContext";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

const DetailStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Profile = styled.img`
  height: 40px;
`;

function Detail() {
  const location = useLocation();
  const state = useIssueState();
  const [detail, setDetail] = useState<IssueType>();

  useEffect(() => {
    const parsing = Number(location.pathname.split("/")[2]);
    const data = state.filter((i) => i.number === parsing);
    console.log("🚀 ~ useEffect ~ data:", data);
    const set = data[0];
    setDetail(set);
  }, []);

  return (
    <DetailStyle>
      <section>
        <Profile src={detail?.user.avatar_url} />
        <div>#{detail?.number}</div>
        <div>작성자 : {detail?.user.login}</div>
        <div>작성일 : {detail?.created_at}</div>
        <div>코멘트 : {detail?.comments}</div>
      </section>
      <br />
      <Markdown>{detail?.body}</Markdown>
    </DetailStyle>
  );
}

export default Detail;
