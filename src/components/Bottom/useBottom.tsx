import { useRef } from "react";
import { IssueType, useIssueDispatch, useIssueState } from "../useContext";

function useBottom() {
  const dispatch = useIssueDispatch();
  const state = useIssueState();
  const pageRef = useRef(1);
  const perPageRef = useRef(10);

  const setPage = (data: IssueType[] | null) => {
    if (data) {
      const newPage = state?.concat(data);
      dispatch(newPage);
    }
  };

  const onLoadIssues = () => {
    const authToken =
      "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";
    fetch(
      `https://api.github.com/repos/angular/angular-cli/issues?per_page=${perPageRef.current}&page=${pageRef.current}&sort=comments`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        pageRef.current += 1;
        setPage(data);
      });
  };
  const onResetIssues = () => {
    pageRef.current = 1;
    perPageRef.current = 10;
    dispatch(null);
  };
  return { onLoadIssues, onResetIssues };
}

export default useBottom;
