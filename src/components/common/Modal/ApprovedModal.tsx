import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import { SpaceBetweenWrapper } from "../ContentWrapper";
import IcInfo from "../../../assets/icons/Modal/ic-info.svg";
import IcButtonPolygon from "../../../assets/icons/Modal/ic-buttonPolygonApproved.svg";
import { INPUTTICKERS, Input } from "../Input";
import { TokenTicker } from "../../../types/TokenTicker";
import { useLocation } from "react-router-dom";

interface ValueWithToken {
  value: string;
  ticker: TokenTicker;
}
interface ApprovedModalProps {
  amount: ValueWithToken[];
  estimated?: ValueWithToken;
  closeModalHandler: () => void;
  confirmHandler: () => void;
}

const ApprovedModal = (props: ApprovedModalProps) => {
  const { amount, estimated, closeModalHandler, confirmHandler } = props;

  const { pathname } = useLocation();

  console.log("pathname", pathname);

  return (
    <ModalWrapper closeModalHandler={closeModalHandler}>
      <Container>
        <SpaceBetweenWrapper $direction="column" style={{ minHeight: "430px" }}>
          <MainContentWrapper>
            <TitleWrapper>
              <TitleText>
                {pathname.includes("deposit") && "Depositing tokens"}
                {pathname.includes("swap") && "Swap Token"}
                {pathname.includes("staking") && "Staking Token"}
              </TitleText>
            </TitleWrapper>
            <div>
              {amount.length > 1 ? (
                <>
                  <AmountLabel>Amount</AmountLabel>
                  <ValueWrapper>
                    {amount.map((item) => (
                      <ValueItem>
                        <span>{item.value}</span>
                        <TickerWrapper>
                          <TickerImage
                            src={item.ticker.image}
                            $isAleo={item.ticker.name === "ALEO" ? true : false}
                          />
                          <span>{item.ticker.name}</span>
                        </TickerWrapper>
                      </ValueItem>
                    ))}
                  </ValueWrapper>
                </>
              ) : (
                <Input
                  topLabelText={"Amount"}
                  value={amount[0].value}
                  setValue={() => {}}
                  ticker={amount[0].ticker}
                  readonly
                />
              )}
              {estimated && (
                <Input
                  topLabelText={"Estimated"}
                  value={estimated.value}
                  setValue={() => {}}
                  ticker={estimated.ticker}
                  readonly
                />
              )}
            </div>
          </MainContentWrapper>

          <ButtonContainer>
            <GrayButton>Approve</GrayButton>
            <img src={IcButtonPolygon} />
            <BlueButton
              onClick={(event) => {
                event.stopPropagation();
                confirmHandler();
              }}
            >
              {pathname.charAt(1).toUpperCase() + pathname.slice(2)}
            </BlueButton>
          </ButtonContainer>
        </SpaceBetweenWrapper>
      </Container>
    </ModalWrapper>
  );
};

export default ApprovedModal;

const Container = styled.div`
  width: 450px;
  min-height: 430px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border-radius: 20px;
  background-color: #fff;
`;

const TitleText = styled.span`
  ${({ theme }) => theme.fonts.Title_Medium_2};
`;

const SubText = styled.span`
  ${({ theme }) => theme.fonts.Label_Medium};
  color: #4a5967;
`;

const ContentText = styled.span`
  ${({ theme }) => theme.fonts.Body_Text_Small};
  color: #3e404c;
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 40px 40px 0 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 23px 23px 22px 23px;

  div {
    flex: 1;
    padding: 14px 18px;
    text-align: center;
    ${({ theme }) => theme.fonts.Body_Text_Large};
  }

  img {
    width: 54px;
  }
`;

const BlueButton = styled.div`
  border-radius: 0 10px 10px 0;
  color: #fff;
  background-color: #657dfa;
  cursor: pointer;
`;
const GrayButton = styled.div`
  border-radius: 10px 0 0 10px;
  color: #e8e8ee;
  background-color: #33343e;
`;

const AmountLabel = styled.div`
  color: #33343e;
  ${({ theme }) => theme.fonts.Body_Text_Medium_2};
  padding-left: 10px;
  margin-bottom: 10px;
`;

const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 22px 24px 30px;
  border-radius: 20px;
  border: 1px solid #d1d1d1;
  margin-bottom: 10px;
`;

const ValueItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    width: 100%;
    ${({ theme }) => theme.fonts.Title_Large};
    color: #15151a;
    outline: none;
    border: none;
  }
`;

const TickerWrapper = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;

  span {
    ${({ theme }) => theme.fonts.Body_Text_Large};
    color: #09090a;
  }
`;

const TickerImage = styled.img<{ $isAleo?: boolean }>`
  width: 26px;
  height: 26px;
  ${({ $isAleo }) =>
    $isAleo && "filter: drop-shadow(0px 6px 14px rgba(98, 98, 105, 0.15));"};
`;
