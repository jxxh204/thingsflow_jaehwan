import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const MainStyle = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
function Main({ children }: Props) {
  return <MainStyle>{children}</MainStyle>;
}

export default Main;
