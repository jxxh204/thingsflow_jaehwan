import styled from "styled-components";
import { IssueType } from "../useContext";

const IssueStyle = styled.article`
  border: solid 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 90%;
  font-size: 14px;
  height: 50px;
`;

const ContentStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const CommentStyle = styled.section`
  width: 100px;
  text-align: right;
`;

function Issue({ data }: { data: IssueType }) {
  const date = new Date(data.created_at);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}.${month}.${day}`;
  return (
    <IssueStyle>
      <ContentStyle>
        <div>
          <span>#{data?.number}</span> <span>{data?.title}</span>
        </div>
        <div>
          <span>작성자: {data?.user.login}</span>,{" "}
          <span>작성일: {formattedDate}</span>
        </div>
      </ContentStyle>
      <CommentStyle>코멘트 : {data?.comments}</CommentStyle>
    </IssueStyle>
  );
}

export default Issue;
