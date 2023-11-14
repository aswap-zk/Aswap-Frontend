import styled from "styled-components";
import IntroVideo from "../../assets/video/intro.mp4";
import Header from "../../components/common/Header";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Root>
      <VideoWrapper>
        <Video muted autoPlay loop>
          <source src={IntroVideo} type="video/mp4" />
        </Video>
      </VideoWrapper>
      <Header type="intro" />
      <ContentWrapper>
        <TitleText>Abundant Liquidity DEX on ALEO</TitleText>
        <SubText>Keep cross-chained assets securely</SubText>
        <Button onClick={() => navigate("/swap")}>Launch app</Button>
      </ContentWrapper>
    </Root>
  );
};

export default Main;

const Root = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  position: absolute;
  padding-left: 180px;
  bottom: 30%;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;

const TitleText = styled.span`
  font-family: "Monument";
  font-size: 80px;
  text-shadow: 5px 7px 20px rgba(0, 0, 0, 0.1),
    20px 30px 36px rgba(0, 0, 0, 0.09), 46px 67px 49px rgba(0, 0, 0, 0.05),
    81px 119px 58px rgba(0, 0, 0, 0.01), 127px 186px 63px rgba(0, 0, 0, 0);
  background: var(
    --gradation-light-gradation,
    linear-gradient(90deg, #fff 0.23%, #edeef4 98.63%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubText = styled.span`
  text-shadow: 5px 7px 20px rgba(0, 0, 0, 0.1),
    20px 30px 36px rgba(0, 0, 0, 0.09), 46px 67px 49px rgba(0, 0, 0, 0.05),
    81px 119px 58px rgba(0, 0, 0, 0.01), 127px 186px 63px rgba(0, 0, 0, 0);
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(
    --gradation-light-gradation,
    linear-gradient(90deg, #fff 0.23%, #edeef4 98.63%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Button = styled.div`
  margin-top: 30px;
  padding: 16px 30px;
  border-radius: 40px;
  background: var(--primary-blue, #384cff);
  /* Drop shadow - new */
  box-shadow: 5px 7px 20px 0px rgba(0, 0, 0, 0.1),
    20px 30px 36px 0px rgba(0, 0, 0, 0.09),
    46px 67px 49px 0px rgba(0, 0, 0, 0.05),
    81px 119px 58px 0px rgba(0, 0, 0, 0.01),
    127px 186px 63px 0px rgba(0, 0, 0, 0);

  color: #fff;
  ${({ theme }) => theme.fonts.Title_Medium};
`;
