import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import { SpaceBetweenWrapper } from "../ContentWrapper";
import IcInfo from "../../../assets/icons/Modal/ic-info.svg";
import IcButtonPolygon from "../../../assets/icons/Modal/ic-buttonPolygonApproved.svg";
import { INPUTTICKERS, Input } from "../Input";

interface ApprovedModalProps {
  type: string;
}

const ApprovedModal = (props: ApprovedModalProps) => {
  const { type } = props;

  return (
    <ModalWrapper>
      <Container>
        <SpaceBetweenWrapper $direction="column">
          <MainContentWrapper>
            <TitleWrapper>
              <TitleText>
                {type === "Deposit" ? "Depositing tokens" : `${type} Token`}
              </TitleText>
            </TitleWrapper>
            <TitleWrapper>
              <Input
                topLabelText={"Amount"}
                value="23.03"
                setValue={() => {}}
                ticker={INPUTTICKERS.aleo}
                readonly
              />
              <Input
                topLabelText={"Amount"}
                value="23.03"
                setValue={() => {}}
                ticker={INPUTTICKERS.wEth}
                readonly
              />
            </TitleWrapper>
          </MainContentWrapper>

          <ButtonContainer>
            <GrayButton>Approve</GrayButton>
            <img src={IcButtonPolygon} />
            <BlueButton>{type}</BlueButton>
          </ButtonContainer>
        </SpaceBetweenWrapper>
      </Container>
    </ModalWrapper>
  );
};

export default ApprovedModal;

const Container = styled.div`
  width: 450px;

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

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 40px;
  background-color: #f8f8fb;
`;

const InfoTitleWithIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 16px;
    height: 16px;
  }
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
`;
const GrayButton = styled.div`
  border-radius: 10px 0 0 10px;
  color: #e8e8ee;
  background-color: #33343e;
`;
