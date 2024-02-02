import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type Issue = {
  number: number;
  title: "string";
  user: "string"; // user.login
  created_at: Date;
  comments: number;
};

const IssueContext = createContext<Issue | null>(null);
const IssueDispatchContext = createContext<null | Dispatch<
  SetStateAction<Issue | null>
>>(null);

function CurrentIssueProvider({ children }: { children: React.ReactNode }) {
  const [Issue, setIssue] = useState<Issue | null>(null);
  return (
    <IssueContext.Provider value={Issue}>
      <IssueDispatchContext.Provider value={setIssue}>
        {children}
      </IssueDispatchContext.Provider>
    </IssueContext.Provider>
  );
}

function useIssueState() {
  const context = useContext(IssueContext);
  if (context === undefined) {
    throw new Error("이슈 컨텍스트 없음.");
  }
  return context;
}
function useIssueDispatch() {
  const context = useContext(IssueDispatchContext);
  if (context === undefined) {
    throw new Error("이슈 컨텍스트 없음.");
  }
  return context;
}

export { CurrentIssueProvider, useIssueState, useIssueDispatch };
