import styled from "styled-components";
import PageWrapper from "../../components/common/PageWrapper";
import Header from "../../components/common/Header";
import PageTitle from "../../components/common/PageTitle";
import {
  ButtonWrapper,
  ContentWrapper,
  DarkContentWrapper,
  SpaceBetweenWrapper,
} from "../../components/common/ContentWrapper";
import { useEffect, useState } from "react";
import GradientButton from "../../components/common/GradientButton";
import { INPUTTICKERS, Input, InputProps } from "../../components/common/Input";
import IcSwap from "../../assets/icons/Swap/ic-swap.svg";
import IcAleo from "../../assets/icons/tokens/ic-aleo.svg";
import IcWEth from "../../assets/icons/tokens/ic-wEth.svg";
import IcChevron from "../../assets/icons/Swap/ic-chevronUp.svg";
import IcHelp from "../../assets/icons/Swap/ic-helpCircle.svg";
import CompareTwoTokens from "../../components/common/CompareTwoTokens";
import {
  formatNumberWithCommas,
  parseNumberFromString,
} from "../../utils/numberFormatter";

const Swap = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [targetToken, setTargetToken] = useState([
    INPUTTICKERS.aleo,
    INPUTTICKERS.wEth,
  ]);
  const aleoToWEthRate = 0.00058;

  useEffect(() => {
    if (fromInput !== "") inputHandler();
  }, [fromInput]);

  const fromInputProps: InputProps = {
    topLabelText: "From",
    value: fromInput,
    setValue: setFromInput,
    placeholder: "0.00",
    ticker: targetToken[0],
    leftLabelTexts: ["$ 8.86", "(-0.050%)"],
    rightLabelTexts: ["Balance", "0.00"],
  };
  const toInputProps: InputProps = {
    topLabelText: "To",
    value: toInput,
    setValue: setToInput,
    placeholder: "0.00",
    ticker: targetToken[1],
    leftLabelTexts: ["$ 8.86", "(-0.050%)"],
    rightLabelTexts: ["Balance", "0.00"],
    readonly: true,
  };

  function inputHandler() {
    let targetNumber: number = parseNumberFromString(fromInput);
    if (targetToken[0].name === "ALEO") {
      targetNumber *= aleoToWEthRate;
    } else {
      targetNumber /= aleoToWEthRate;
    }
    setToInput(formatNumberWithCommas(targetNumber));
  }

  function switchHandler() {
    setTargetToken((prev) => [...prev].reverse());
    const fromValue = fromInput;
    setFromInput(toInput);
    setToInput(fromValue);
  }

  function confirmHandler() {}

  return (
    <>
      <Header />
      <PageWrapper>
        <PageTitle>Swap</PageTitle>
        <Container>
          <ContentWrapper>
            <Input {...fromInputProps} />
            <IconWrapper onClick={switchHandler}>
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
              <CompareTwoTokens
                tokens={[
                  { name: "ALEO", value: "000,000 K", icon: IcAleo },
                  { name: "wETH", value: "000,000 K", icon: IcWEth },
                ]}
              />
            </PoolInnerWrapper>
          </ContentWrapper>
          <DarkContentWrapper>
            <SpaceBetweenWrapper>
              <WrapperTitle>1ALEO = 0.00058 wETH</WrapperTitle>
              <ChevronIcon src={IcChevron} />
            </SpaceBetweenWrapper>
            <AccordionInfoWrapper>
              <SpaceBetweenWrapper>
                <HelpIconWrapper>
                  <SmallText>Expected Output</SmallText>
                  <img src={IcHelp} />
                </HelpIconWrapper>
                <SmallText>8.84832 ALEO</SmallText>
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
                <SmallText>8.42697 wETH</SmallText>
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
            <GradientButton onClick={confirmHandler}>Confirm</GradientButton>
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
    filter: drop-shadow(0px 0px 10px rgba(9, 9, 10, 0.15));
  }
`;

const PoolInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const MediumText = styled.span`
  ${({ theme }) => theme.fonts.Body_Text_Small};
  padding: 0 10px;
  color: #33343e;
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
