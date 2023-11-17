import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import { SpaceBetweenWrapper } from "../ContentWrapper";
import IcInfo from "../../../assets/icons/Modal/ic-info.svg";

const RequestModal = () => {
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
      </Container>
    </ModalWrapper>
  );
};

export default RequestModal;

const Container = styled.div`
  width: 450px;
  height: 450px;
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
  padding: 40px 40px;
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
