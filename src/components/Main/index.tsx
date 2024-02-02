import styled from "styled-components";
import Issues from "./Issues";
import Bottom from "../Bottom";

const MainStyle = styled.section`
  width: 100%;
  height: 100%;
`;
function Main() {
  return (
    <MainStyle>
      <Issues />
      <Bottom />
    </MainStyle>
  );
}

export default Main;
