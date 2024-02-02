import Main from "components/Main";

import { CurrentIssueProvider } from "components/useContext";
import Title from "components/Title";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/issue/:issueNumber" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </AppStyle>
    </CurrentIssueProvider>
  );
}

export default App;
