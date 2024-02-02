import Main from "components/Main";
import Issues from "components/Main/Issues";
import Bottom from "components/Bottom";
import { CurrentIssueProvider } from "components/useContext";
import Title from "components/Title";
import styled from "styled-components";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  //제출전에 토큰 빼야함.

  return (
    <CurrentIssueProvider>
      <AppStyle>
        <Title>Anguler / Angular-cli</Title>
        <Main>
          <Issues />
        </Main>
        <Bottom />
      </AppStyle>
    </CurrentIssueProvider>
  );
}

export default App;
