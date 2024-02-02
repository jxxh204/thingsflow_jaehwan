import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type dataType = {
  issue: IssueType;
};
export type IssueType = {
  number: number;
  title: string;
  user: {
    login: string;
  }; // user.login
  created_at: string;
  comments: number;
};

const IssueContext = createContext<IssueType[]>([]);
const IssueDispatchContext = createContext<null | Dispatch<
  SetStateAction<IssueType[]>
>>(null);

function CurrentIssueProvider({ children }: { children: React.ReactNode }) {
  const [issue, setIssue] = useState<IssueType[]>([]);

  return (
    <IssueContext.Provider value={issue}>
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
