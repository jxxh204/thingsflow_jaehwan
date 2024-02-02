import styled from "styled-components";
import Button from "../Button";
import useBottom from "./useBottom";

type Props = {
  load: null;
  reset: null;
};

const BottomStyle = styled.section`
  position: absolute;
  bottom: 0px;
  width: 100%;
  border: 1px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: solid 1px;
  background-color: white;
`;
function Bottom() {
  const { onLoadIssues, onResetIssues } = useBottom();
  return (
    <BottomStyle>
      <Button onClickHandler={onLoadIssues}>load</Button>
      <Button onClickHandler={onResetIssues}>reset</Button>
    </BottomStyle>
  );
}

export default Bottom;
