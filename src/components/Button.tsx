import styled from "styled-components";

type Props = {
  onClickHandler: () => void;
  children: string;
};
const ButtonStyle = styled.button`
  padding: 6px 20px;
  border-radius: 16px;
  font-size: 18px;
`;

function Button({ onClickHandler, children }: Props) {
  return <ButtonStyle onClick={onClickHandler}>{children}</ButtonStyle>;
}

export default Button;
