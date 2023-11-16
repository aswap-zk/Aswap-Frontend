import styled from "styled-components";
import Header from "../../components/common/Header";
import PageWrapper from "../../components/common/PageWrapper";
import PageTitle from "../../components/common/PageTitle";
import {
  ButtonWrapper,
  ContentWrapper,
  DarkContentWrapper,
  SpaceBetweenWrapper,
} from "../../components/common/ContentWrapper";
import GradientButton from "../../components/common/GradientButton";
import IcHelp from "../../assets/icons/Swap/ic-helpCircle.svg";
import IcAleo from "../../assets/icons/tokens/ic-aleo.svg";
import { useState } from "react";
import { Input } from "../../components/common/Input";
import IcSwitch from "../../assets/icons/Staking/ic-arrowSwitch.svg";

const Staking = () => {
  const [amountInput, setAmountInput] = useState("");

  const amountInputProps = {
    value: amountInput,
    setValue: setAmountInput,
    placeholder: "0.00",
    maxBtnOnClick: amountMaxHandler,
  };

  function amountMaxHandler() {}
  function confirmHandler() {}

  return (
    <>
      <Header />
      <PageWrapper maxWidth={520}>
        <PageTitle>Staking</PageTitle>
        <Container>
          <AmountWrapper>
            <AmountInnerWrapper>
              <SpaceBetweenWrapper>
                <BodyMedium2Text>Staked amount</BodyMedium2Text>
                <HelpIcon src={IcHelp} alt="Question mark Icon" />
              </SpaceBetweenWrapper>
              <SpaceBetweenWrapper>
                <TitleMediumText>4,605</TitleMediumText>
                <Ticker isBig>
                  <img src={IcAleo} alt="Aleo Icon" />
                  <span>ALEO</span>
                </Ticker>
              </SpaceBetweenWrapper>
            </AmountInnerWrapper>
            <ContentWrapper>
              <ContentTitle>Amount to Stake</ContentTitle>
              <AmountSubTitle>
                <img src={IcSwitch} />$ 514,654
              </AmountSubTitle>
              <Input {...amountInputProps} />
              <AmountSubInfoWrapper>
                <SpaceBetweenWrapper>
                  <span>Balance</span>
                  <span>0.0000</span>
                </SpaceBetweenWrapper>
                <SpaceBetweenWrapper>
                  <span>Commission</span>
                  <span>2%</span>
                </SpaceBetweenWrapper>
              </AmountSubInfoWrapper>
            </ContentWrapper>
          </AmountWrapper>
          <ManageWrapper>
            <DarkContentWrapper
              style={{
                boxShadow:
                  "5px 7px 20px 0px rgba(0, 0, 0, 0.10), 20px 30px 36px 0px rgba(0, 0, 0, 0.09), 46px 67px 49px 0px rgba(0, 0, 0, 0.05), 81px 119px 58px 0px rgba(0, 0, 0, 0.01), 127px 186px 63px 0px rgba(0, 0, 0, 0.00)",
              }}
            >
              <ContentTitle>Manage staking</ContentTitle>
            </DarkContentWrapper>
            <ManageInnerWrapper></ManageInnerWrapper>
          </ManageWrapper>
          <ButtonWrapper>
            <GradientButton children={"Confirm"} onClick={confirmHandler} />
          </ButtonWrapper>
        </Container>
      </PageWrapper>
    </>
  );
};

export default Staking;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 38px;
`;

const AmountWrapper = styled.div`
  width: 100%;
  border-radius: 20px;
  background: linear-gradient(90deg, #3e404c 0.06%, #09090a 99.92%);
`;

const AmountInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 26px 35px 21px 35px;

  color: #fff;
`;

const BodyMedium2Text = styled.span`
  ${({ theme }) => theme.fonts.Body_Text_Medium_2};
`;

const HelpIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const TitleMediumText = styled.span`
  ${({ theme }) => theme.fonts.Title_Medium};
`;

const Ticker = styled.div<{ isBig?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 20px;
    height: 20px;
  }
  span {
    ${({ theme }) => theme.fonts.Body_Text_Large};
    ${({ isBig }) => !isBig && "font-size: 14px; font-weight: 500;"};
  }
`;

const ContentTitle = styled.div`
  width: 100%;
  text-align: center;
  ${({ theme }) => theme.fonts.Title_Medium_2};
`;

const ManageWrapper = styled.div`
  border-radius: 20px;
  background: #33343e;
`;

const ManageInnerWrapper = styled.div`
  padding: 28px 36px 36px 36px;
`;

const AmountSubTitle = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 11px;
  padding-right: 18px;
  padding-bottom: 12px;

  ${({ theme }) => theme.fonts.Body_Text_Small};
  color: #4a5967;

  img {
    width: 12px;
    height: 12px;
  }
`;

const AmountSubInfoWrapper = styled.div`
  padding: 18px 24px 0 24px;

  span {
    ${({ theme }) => theme.fonts.Body_Text_Small};
    color: #4a5967;
  }
`;
