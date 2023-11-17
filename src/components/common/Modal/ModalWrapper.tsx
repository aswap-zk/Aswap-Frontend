import { ReactNode } from "react";
import { styled } from "styled-components";

interface ModalWrapperProps {
  children: ReactNode;
}

function ModalWrapper({ children }: ModalWrapperProps) {
  return <Container>{children}</Container>;
}

export default ModalWrapper;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  z-index: 1000;
`;
