import Main from "components/Main";
import Issues from "./components/Main/Issues";
import Bottom from "./components/Bottom";
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
      .then((data) => data.map((issue) => console.log(issue.title)));
  }, []);
  return (
    <>
      <Main>
        <Issues issues={null} />
      </Main>
      <Bottom load={null} reset={null} />
    </>
  );
}

export default App;
