import styled from "styled-components";

const TitleStyle = styled.h1`
  color: gray;
  font-size: 28px;
  padding: 14px 0;
`;

function Title({ children }: { children: React.ReactNode }) {
  return <TitleStyle>{children}</TitleStyle>;
}

export default Title;
