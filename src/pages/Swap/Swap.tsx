import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "../../components/common/PageWrapper";
import Header from "../../components/common/Header";
import PageTitle from "../../components/common/PageTitle";
import {
  ContentWrapper,
  DarkContentWrapper,
} from "../../components/common/ContentWrapper";
import { useState } from "react";
import GradientButton from "../../components/common/GradientButton";

const Swap = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  function confirmBtnHandler() {}

  return (
    <>
      <Header />
      <PageWrapper>
        <PageTitle>Swap</PageTitle>
        <Container>
          <ContentWrapper>Pool Liquidity</ContentWrapper>
          <ContentWrapper>
            <WrapperTitle>Pool Liquidity</WrapperTitle>
          </ContentWrapper>
          <DarkContentWrapper>
            <WrapperTitle>1KLAY = 0.00058 INVI</WrapperTitle>
          </DarkContentWrapper>
          <GradientButton onClick={confirmBtnHandler}>Confirm</GradientButton>
        </Container>
      </PageWrapper>
    </>
  );
};

export default Swap;

const WrapperTitle = styled.span`
  ${({ theme }) => theme.fonts.Body_Text_Large_2};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 38px;
`;
