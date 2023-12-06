import styled from "styled-components";
import Header from "../../components/common/Header";
import PageWrapper from "../../components/common/PageWrapper";
import PageTitle from "../../components/common/PageTitle";
import {
  ButtonWrapper,
  ContentWrapper,
  SpaceBetweenWrapper,
} from "../../components/common/ContentWrapper";
import GradientButton from "../../components/common/GradientButton";
import IcHelp from "../../assets/icons/Swap/ic-helpCircle.svg";
import IcAleo from "../../assets/icons/tokens/ic-aleo.svg";
import { useState } from "react";
import { Input, InputProps } from "../../components/common/Input";
import IcSwitch from "../../assets/icons/Staking/ic-arrowSwitch.svg";
import RequestModal from "../../components/common/Modal/RequestModal";
import ApprovedModal from "../../components/common/Modal/ApprovedModal";
import { INPUTTICKERS } from "../../components/common/Input";
import { useRecoilState } from "recoil";
import { modalTypeAtom } from "../../atom/modalType";
import NetworkErrorModal from "../../components/common/Modal/NetworkErrorModal";
import IcTooltip from "../../assets/icons/Staking/ic-tooltipRect.svg";
import ManageStaking from "../../components/Staking/ManageStaking";

const Staking = () => {
  const [amountInput, setAmountInput] = useState("");
  const [selectedToken, setSelectedToken] = useState("ALEO");
  const [modalType, setModalType] = useRecoilState(modalTypeAtom);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const selectTokenList = ["KLAY", "wETH", "ALEO"];
  const amountInputProps: InputProps = {
    value: amountInput,
    setValue: setAmountInput,
    placeholder: "0.00",
    maxBtnOnClick: amountMaxHandler,
    selectList: selectTokenList,
    selectedValue: selectedToken,
    setSelectedValue: setSelectedToken,
  };

  function amountMaxHandler() {}
  function confirmHandler() {
    console.log("Confirm");
    setModalType("request");
  }
  function modalApprovedHandler() {
    console.log("Approved");
    setModalType("approved");
  }
  function modalConfirmHanler() {
    console.log("Confirm");
    setModalType("none");
  }
  function closeModalHandler() {
    console.log("Close");
    setModalType("none");
  }

  return (
    <>
      {modalType === "error" && (
        <NetworkErrorModal closeModalHandler={closeModalHandler} />
      )}
      {modalType === "request" && (
        <RequestModal
          approvedHandler={modalApprovedHandler}
          closeModalHandler={closeModalHandler}
        />
      )}
      {modalType === "approved" && (
        <ApprovedModal
          amount={[{ value: "23.03", ticker: INPUTTICKERS.aleo }]}
          closeModalHandler={closeModalHandler}
          confirmHandler={modalConfirmHanler}
        />
      )}
      <Header />
      <PageWrapper maxWidth={520}>
        <PageTitle>Staking</PageTitle>
        <Container>
          <AmountWrapper>
            <AmountInnerWrapper>
              <SpaceBetweenWrapper>
                <BodyMedium2Text>Staked amount</BodyMedium2Text>
                <HelpIcon
                  src={IcHelp}
                  alt="Question mark Icon"
                  onMouseEnter={() => {
                    setIsTooltipVisible(true);
                  }}
                  onMouseLeave={() => {
                    setIsTooltipVisible(false);
                  }}
                />
              </SpaceBetweenWrapper>
              <SpaceBetweenWrapper>
                <TitleMediumText>4,605</TitleMediumText>
                <Ticker $isBig>
                  <img src={IcAleo} alt="Aleo Icon" />
                  <span>ALEO</span>
                </Ticker>
              </SpaceBetweenWrapper>
              {isTooltipVisible && (
                <ToolTipWrapper>
                  <img src={IcTooltip} />
                  <div>The amount you have staked in the validator pool.</div>
                </ToolTipWrapper>
              )}
            </AmountInnerWrapper>
            <ContentWrapper>
              <ContentTitle>Amount to Stake</ContentTitle>
              <AmountSubTitle>
                <img src={IcSwitch} alt="Switch Icon" />$ 514,654
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
          <ManageStaking />
          <ButtonWrapper>
            <GradientButton onClick={confirmHandler}>Confirm</GradientButton>
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
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 26px 35px 21px 35px;

  color: #fff;
`;

const ToolTipWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: -388px;

  display: flex;
  align-items: center;

  img {
    width: 12px;
    height: 14px;
  }
  div {
    padding: 24px;
    ${({ theme }) => theme.fonts.Body_Text_Medium_2};
    color: #fff;

    border-radius: 20px;
    background: var(--primary-neutral-30, #3e404c);
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.12);
  }
`;
const BodyMedium2Text = styled.span`
  ${({ theme }) => theme.fonts.Body_Text_Medium_2};
`;
const TitleMediumText = styled.span`
  ${({ theme }) => theme.fonts.Title_Medium};
`;

const HelpIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const Ticker = styled.div<{ $isBig?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 20px;
    height: 20px;
  }
  span {
    ${({ theme }) => theme.fonts.Body_Text_Medium_2};
    ${({ $isBig }) => $isBig && "font-size: 16px; font-weight: 600;"};
  }
`;

const ContentTitle = styled(TitleMediumText)`
  width: 100%;
  text-align: center;
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
