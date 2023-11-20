import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import { SpaceBetweenWrapper } from "../ContentWrapper";
import IcInfo from "../../../assets/icons/Modal/ic-info.svg";
import IcButtonPolygon from "../../../assets/icons/Modal/ic-buttonPolygonRequest.svg";

interface RequestModalProps {
  type: string;
  approvedHandler: () => void;
}

const RequestModal = (props: RequestModalProps) => {
  const { type, approvedHandler } = props;

  return (
    <ModalWrapper>
      <Container>
        <MainContentWrapper>
          <TitleWrapper>
            <TitleText>Transition requests</TitleText>
            <SubText>
              Approve transaction to allow the contract access to below tokens.
            </SubText>
          </TitleWrapper>
          <TitleWrapper>
            <SpaceBetweenWrapper>
              <ContentText>Token</ContentText>
              <ContentText>ALEO</ContentText>
            </SpaceBetweenWrapper>
            <SpaceBetweenWrapper>
              <ContentText>Token</ContentText>
              <ContentText>wETH</ContentText>
            </SpaceBetweenWrapper>
          </TitleWrapper>
        </MainContentWrapper>
        <InfoWrapper>
          <InfoTitleWithIconWrapper>
            <img src={IcInfo} />
            <ContentText>Pool Liquidity</ContentText>
          </InfoTitleWithIconWrapper>
          <SubText>
            Your withdrawal request may be temporarily delayed according to the
            level of pool activation. Please check the detailed instruction
            before the deposit service.
          </SubText>
        </InfoWrapper>
        <ButtonContainer>
          <BlueButton onClick={approvedHandler}>Approve</BlueButton>
          <img src={IcButtonPolygon} />
          <GrayButton>{type}</GrayButton>
        </ButtonContainer>
      </Container>
    </ModalWrapper>
  );
};

export default RequestModal;

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
  padding: 40px;
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
  margin: 14px 23px 22px 23px;

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
  border-radius: 10px 0 0 10px;
  color: #fff;
  background-color: #657dfa;
  cursor: pointer;
`;
const GrayButton = styled.div`
  border-radius: 0 10px 10px 0;
  color: #e8e8ee;
  background-color: #33343e;
`;
