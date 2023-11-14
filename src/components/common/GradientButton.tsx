import styled from "styled-components";

interface GradientButtonProps {
  children: string;
  onClick: () => void;
}

const GradientButton = (props: GradientButtonProps) => {
  return <Button onClick={props.onClick}>{props.children}</Button>;
};

export default GradientButton;

const Button = styled.div`
  display: flex;
  width: 100%;
  padding: 18px 90px;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background: linear-gradient(96deg, #80fff7 2.69%, #657dfa 95.93%);
  color: #fff;
  ${({ theme }) => theme.fonts.Title_Medium_2};
  cursor: pointer;
`;
