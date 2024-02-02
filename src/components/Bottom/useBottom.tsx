import { useIssueDispatch } from "../useContext";

function useBottom() {
  const dispatch = useIssueDispatch();

  const onLoadIssues = () => {
    const authToken =
      "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";
    fetch(" https://api.github.com/repos/angular/angular-cli/issues", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(data));
  };
  const onResetIssues = () => {
    dispatch(null);
  };
  return { onLoadIssues, onResetIssues };
}

export default useBottom;
