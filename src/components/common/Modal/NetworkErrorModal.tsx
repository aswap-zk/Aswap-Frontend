import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import IcClose from "../../../assets/icons/Modal/ic-close.svg";
import IcInfo from "../../../assets/icons/Modal/ic-infoRed.svg";

interface NetworkErrorModalProps {
  closeModalHandler: () => void;
}

const NetworkErrorModal = (props: NetworkErrorModalProps) => {
  const { closeModalHandler } = props;

  return (
    <ModalWrapper closeModalHandler={closeModalHandler}>
      <Container>
        <CloseButtonWrapper>
          <img src={IcClose} />
        </CloseButtonWrapper>
        <ContentContainer>
          <InfoIcon src={IcInfo} />
          <TitleText>Change your network </TitleText>
          <ContentText>
            {"Please change the network\nof the wallet you want to connect."}
          </ContentText>
        </ContentContainer>
        <ConfirmButton>Switch network</ConfirmButton>
      </Container>
    </ModalWrapper>
  );
};

export default NetworkErrorModal;

const Container = styled.div`
  width: 450px;
  min-height: 420px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(9, 9, 10, 0.1);
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 98px;
`;

const InfoIcon = styled.img`
  width: 60px;
  height: 60px;
`;

const TitleText = styled.span`
  ${({ theme }) => theme.fonts.Title_Medium_3};
  color: #ff7979;
`;

const ContentText = styled.span`
  white-space: pre-line;
  ${({ theme }) => theme.fonts.Body_Text_Small_2};
  color: #3e4064;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 23px 23px 13px 13px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const ConfirmButton = styled.div`
  display: flex;
  padding: 11px 18px;
  margin: 30px;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: var(--red, #ff7979);
  ${({ theme }) => theme.fonts.Body_Text_Large};
  color: #fff;
`;
