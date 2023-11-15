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
import { INPUTTICKERS, Input } from "../../components/common/Input";
import IcSwap from "../../assets/icons/Swap/ic-swap.svg";
import IcKlay from "../../assets/icons/tokens/ic-klay.svg";
import IcInvi from "../../assets/icons/tokens/ic-invi.svg";
import IcChevron from "../../assets/icons/Swap/ic-chevronUp.svg";
import IcHelp from "../../assets/icons/Swap/ic-helpCircle.svg";

const Swap = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");

  const fromInputProps = {
    topLabelText: "From",
    value: fromInput,
    setValue: setFromInput,
    placeholder: "0.00",
    ticker: INPUTTICKERS.aleo,
    leftLabelTexts: ["$ 8.86", "(-0.050%)"],
    rightLabelTexts: ["Balance", "0.00"],
  };
  const toInputProps = {
    topLabelText: "To",
    value: toInput,
    setValue: setToInput,
    placeholder: "0.00",
    ticker: INPUTTICKERS.wEth,
    leftLabelTexts: ["$ 8.86", "(-0.050%)"],
    rightLabelTexts: ["Balance", "0.00"],
  };

  function confirmBtnHandler() {}

  return (
    <>
      <Header />
      <PageWrapper>
        <PageTitle>Swap</PageTitle>
        <Container>
          <ContentWrapper>
            <Input {...fromInputProps} />
            <IconWrapper>
              <img src={IcSwap} />
            </IconWrapper>
            <Input {...toInputProps} />
          </ContentWrapper>
          <ContentWrapper>
            <PoolInnerWrapper>
              <WrapperTitle>Pool Liquidity</WrapperTitle>
              <SpaceBetweenWrapper>
                <MediumText>TVL</MediumText>
                <MediumText>251.52m</MediumText>
              </SpaceBetweenWrapper>
              <SpaceBetweenWrapper>
                <MediumText>Total Tokens Locked</MediumText>
              </SpaceBetweenWrapper>
              <LockedTokensWrapper>
                <div>
                  <img src={IcKlay} />
                  <span>Klay</span>
                  <span>000,000 K</span>
                </div>
                <div>
                  <img src={IcInvi} />
                  <span>INVI</span>
                  <span>000,000 K</span>
                </div>
              </LockedTokensWrapper>
            </PoolInnerWrapper>
          </ContentWrapper>
          <DarkContentWrapper>
            <SpaceBetweenWrapper>
              <WrapperTitle>1KLAY = 0.00058 INVI</WrapperTitle>
              <ChevronIcon src={IcChevron} />
            </SpaceBetweenWrapper>
            <AccordionInfoWrapper>
              <SpaceBetweenWrapper>
                <HelpIconWrapper>
                  <SmallText>Expected Output</SmallText>
                  <img src={IcHelp} />
                </HelpIconWrapper>
                <SmallText>8.84832 KLAY</SmallText>
              </SpaceBetweenWrapper>
              <SpaceBetweenWrapper>
                <HelpIconWrapper>
                  <SmallText>Price impact</SmallText>
                  <img src={IcHelp} />
                </HelpIconWrapper>
                <SmallText>0.08 %</SmallText>
              </SpaceBetweenWrapper>
              <SpaceBetweenWrapper>
                <HelpIconWrapper>
                  <SmallText>Minimum received sfter slippage (5.00%)</SmallText>
                  <img src={IcHelp} />
                </HelpIconWrapper>
                <SmallText>8.42697 INVI</SmallText>
              </SpaceBetweenWrapper>
              <SpaceBetweenWrapper>
                <HelpIconWrapper>
                  <SmallText>Protocol Fee</SmallText>
                  <img src={IcHelp} />
                </HelpIconWrapper>
                <SmallText>Max. %</SmallText>
              </SpaceBetweenWrapper>
            </AccordionInfoWrapper>
          </DarkContentWrapper>
          <ButtonWrapper>
            <GradientButton onClick={confirmBtnHandler}>Confirm</GradientButton>
          </ButtonWrapper>
        </Container>
      </PageWrapper>
    </>
  );
};

export default Swap;

const WrapperTitle = styled.span`
  ${({ theme }) => theme.fonts.Body_Text_Large_2};
  margin-bottom: 6px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 38px;
`;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 37px;
    height: 37px;
    margin-top: 16px;
    filter: drop-shadow(0px 0px 20px rgba(9, 9, 10, 0.1));
  }
`;

const PoolInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const SpaceBetweenWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MediumText = styled.span`
  ${({ theme }) => theme.fonts.Body_Text_Small};
  padding: 0 10px;
  color: #33343e;
`;

const LockedTokensWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 14px 22px;
  justify-content: space-between;
  align-items: center;
  margin-top: -10px;

  border-radius: 30px;
  background: #f8f8fb;

  div {
    display: flex;
    align-items: center;
    gap: 6px;

    img {
      width: 18px;
      height: 18px;
    }
    span {
      ${({ theme }) => theme.fonts.Body_Text_Small};
      color: #33343e;
    }
  }
`;

const ChevronIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const AccordionInfoWrapper = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HelpIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  img {
    width: 15px;
    height: 15px;
  }
`;

const SmallText = styled.span`
  ${({ theme }) => theme.fonts.Label_Medium};
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 80px;
`;
