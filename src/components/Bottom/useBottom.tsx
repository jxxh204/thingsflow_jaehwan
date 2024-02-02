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
