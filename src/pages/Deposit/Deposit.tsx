import styled from "styled-components";
import Header from "../../components/common/Header";
import PageWrapper from "../../components/common/PageWrapper";
import PageTitle from "../../components/common/PageTitle";
import { useLocation } from "react-router-dom";
import IcDeposit from "../../assets/icons/Deposit/ic-deposit.svg";
import IcDepositDisabled from "../../assets/icons/Deposit/ic-depositDisabled.svg";
import IcWithdraw from "../../assets/icons/Deposit/ic-withdraw.svg";
import IcWithdrawDisabled from "../../assets/icons/Deposit/ic-withdrawDisabled.svg";
import {
  ButtonWrapper,
  ContentWrapper,
  DarkContentWrapper,
  SpaceBetweenWrapper,
} from "../../components/common/ContentWrapper";
import { INPUTTICKERS, Input } from "../../components/common/Input";
import { useState } from "react";
import GradientButton from "../../components/common/GradientButton";
import CompareTwoTokens from "../../components/common/CompareTwoTokens";
import IcWEth from "../../assets/icons/tokens/ic-wEth.svg";
import IcAleo from "../../assets/icons/tokens/ic-aleo.svg";
import IcWind from "../../assets/icons/Deposit/ic-wind.svg";

const Deposit = () => {
  const { pathname } = useLocation();
  const [wEthInput, setWEthInput] = useState("");
  const [aleoInput, setAleoInput] = useState("");

  const wEthInputProps = {
    value: wEthInput,
    setValue: setWEthInput,
    placeholder: "0.00",
    ticker: INPUTTICKERS.wEth,
    leftLabelTexts: ["Balance", "0.00"],
    rightLabelTexts: ["wETH", "0.00$"],
    maxBtnOnClick: wEthMaxHandler,
  };
  const aleoInputProps = {
    value: aleoInput,
    setValue: setAleoInput,
    placeholder: "0.00",
    ticker: INPUTTICKERS.aleo,
    leftLabelTexts: ["Balance", "0.00"],
    rightLabelTexts: ["ALEO", "0.00$"],
    maxBtnOnClick: aleoMaxHandler,
  };

  function wEthMaxHandler() {}
  function aleoMaxHandler() {}
  function confirmHandler() {}

  return (
    <>
      <Header />
      <PageWrapper>
        <PageTitle>Deposit</PageTitle>
        <Container>
          <TypeButtonsWrapper>
            <TypeButton $active={pathname.includes("withdraw") ? false : true}>
              <img
                src={
                  pathname.includes("withdraw") ? IcDepositDisabled : IcDeposit
                }
                alt="Deposit Icon"
              />
              <span>Deposit</span>
            </TypeButton>
            <TypeButton $active={pathname.includes("withdraw") ? true : false}>
              <img
                src={
                  pathname.includes("withdraw")
                    ? IcWithdraw
                    : IcWithdrawDisabled
                }
                alt="Withdraw Icon"
              />
              <span>Withdraw</span>
            </TypeButton>
          </TypeButtonsWrapper>
          <ContentWrapper>
            <InputsWrapper>
              <InputsTitle>Amount</InputsTitle>
              <Input {...wEthInputProps} />
              <Input {...aleoInputProps} />
            </InputsWrapper>
            <SpaceBetweenWrapper>
              <MediumText>Protocol fee</MediumText>
              <MediumText>0.3</MediumText>
            </SpaceBetweenWrapper>
          </ContentWrapper>
          <DarkContentWrapper>
            <PoolInfoTitle>
              <span>Pool Liquidity</span>
              <img src={IcWind} />
            </PoolInfoTitle>
            <PoolInnerWrapper>
              <SpaceBetweenWrapper>
                <MediumText $isWhite>TVL</MediumText>
                <MediumText $isWhite>251.52$</MediumText>
              </SpaceBetweenWrapper>
              <SpaceBetweenWrapper>
                <MediumText $isWhite>Total value utilized</MediumText>
                <MediumText $isWhite>5,222,605.75 ALEO</MediumText>
              </SpaceBetweenWrapper>
              <SpaceBetweenWrapper>
                <MediumText $isWhite>Total Tokens Locked</MediumText>
                <SmallText>1wETH ≈ 0.00058 ALEO</SmallText>
              </SpaceBetweenWrapper>
              <CompareTwoTokens
                tokens={[
                  { name: "wETH", value: "000,000 K", icon: IcWEth },
                  { name: "ALEO", value: "000,000 K", icon: IcAleo },
                ]}
                isDark
              />
            </PoolInnerWrapper>
          </DarkContentWrapper>
          <ButtonWrapper>
            <GradientButton onClick={confirmHandler}>Confirm</GradientButton>
          </ButtonWrapper>
        </Container>
      </PageWrapper>
    </>
  );
};

export default Deposit;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 38px;
`;

const TypeButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const TypeButton = styled.div<{ $active: boolean }>`
  width: 100%;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: ${({ $active }) => ($active ? "#33343E" : "#E8E8EE")};
  border-radius: 20px;
  filter: drop-shadow(0px 0px 10px rgba(9, 9, 20, 0.15));

  span {
    ${({ theme }) => theme.fonts.Body_Text_Large};
    color: ${({ $active }) => ($active ? "#E8E8EE" : "#09090A")};
  }

  img {
    width: 18px;
    height: 18px;
  }
`;

const InputsTitle = styled.span`
  ${({ theme }) => theme.fonts.Title_Medium_2};
  color: #33343e;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-bottom: 35px;
`;

const MediumText = styled.span<{ $isWhite?: boolean }>`
  ${({ theme }) => theme.fonts.Body_Text_Small};
  color: ${({ $isWhite }) => ($isWhite ? "#fff" : "#4A5967")};
  ${({ $isWhite }) => $isWhite && "padding: 0 4px"};
`;

const SmallText = styled.span`
  ${({ theme }) => theme.fonts.Label_Medium};
  color: #00a3ff;
  padding-right: 4px;
`;

const PoolInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const PoolInfoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;

  span {
    ${({ theme }) => theme.fonts.Body_Text_Large_2};
    color: #fff;
  }
  img {
    width: 16px;
    height: 16px;
  }
`;
