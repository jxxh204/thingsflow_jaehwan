import Main from "components/Main";
import Issues from "./components/Main/Issues";
import Bottom from "./components/Bottom";
import { CurrentIssueProvider } from "./components/useContext";
import { useEffect } from "react";

function App() {
  //제출전에 토큰 빼야함.
  const authToken =
    "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";
  useEffect(() => {
    fetch(" https://api.github.com/repos/angular/angular-cli/issues", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data.map((issue) => console.log(issue)));
  }, []);
  return (
    <CurrentIssueProvider>
      <Main>
        <Issues issues={null} />
      </Main>
      <Bottom load={null} reset={null} />
    </CurrentIssueProvider>
  );
}

export default App;
