import styled from "styled-components";
import {
  DarkContentWrapper,
  SpaceBetweenWrapper,
} from "../common/ContentWrapper";
import Lv99 from "../../assets/images/img-lv99Profile.png";
import IcPolygon from "../../assets/icons/Staking/ic-polygonUp.svg";
import IcArrowUpRight from "../../assets/icons/Staking/ic-arrowUpRight.svg";
import IcAleo from "../../assets/icons/tokens/ic-aleo.svg";

const POOL_DUMMY = [
  { value: "123,214,354.63" },
  //   { value: "12" },
  //   { value: "3248" },
  //   { value: "48503984" },
  //   { value: "20393" },
  //   { value: "48503984" },
  //   { value: "20393" },
  //   { value: "48503984" },
  //   { value: "20393" },
  //   { value: "48503984" },
  //   { value: "20393" },
  //   { value: "48503984" },
  //   { value: "20393" },
];

const ManageStaking = () => {
  const DarkWrapperShadow = {
    boxShadow:
      "5px 7px 20px 0px rgba(0, 0, 0, 0.10), 20px 30px 36px 0px rgba(0, 0, 0, 0.09), 46px 67px 49px 0px rgba(0, 0, 0, 0.05), 81px 119px 58px 0px rgba(0, 0, 0, 0.01), 127px 186px 63px 0px rgba(0, 0, 0, 0.00)",
  };

  return (
    <ManageWrapper>
      <DarkContentWrapper style={DarkWrapperShadow}>
        <ContentTitle>Manage staking</ContentTitle>
        <SpaceBetweenWrapper style={{ marginTop: "20px" }}>
          <ValidatorProfileWrapper>
            <ProfileImg>
              <img src={Lv99} alt="Lv99 Profile Image" />
            </ProfileImg>
            <ProfileText>
              <span>Validator : LV99</span>
              <span>Aleo Network</span>
            </ProfileText>
          </ValidatorProfileWrapper>
          <ValidatorInfoWrapper>
            <OfficialLink>
              <span>Official</span>
              <img src={IcArrowUpRight} />
            </OfficialLink>
            <ValidatorInfoItem>
              <span>Commission</span>
              <BodyMediumText>0.0%</BodyMediumText>
            </ValidatorInfoItem>
            <ValidatorInfoItem>
              <span>Expected APR</span>
              <BodyMediumText>0.0%</BodyMediumText>
            </ValidatorInfoItem>
          </ValidatorInfoWrapper>
        </SpaceBetweenWrapper>
      </DarkContentWrapper>
      <ManageInnerWrapper>
        <PoolStatusInfoWrapper>
          <PoolStatusTitleText>Pool status</PoolStatusTitleText>
          <PoolStatusSubInfoWrapper>
            <SpaceBetweenWrapper>
              <BodyTextSmall>Total Value</BodyTextSmall>
              <PoolStatusValueText>
                <span>4,456,48.50</span>
                <BodyTextSmall>ALEO</BodyTextSmall>
              </PoolStatusValueText>
            </SpaceBetweenWrapper>
            <PoolStatusInfoSmallText>
              <span>Viewing assets</span>
              <img src={IcPolygon} />
            </PoolStatusInfoSmallText>
          </PoolStatusSubInfoWrapper>
        </PoolStatusInfoWrapper>

        <PoolStatusListWrapper>
          <PoolStatusList>
            {POOL_DUMMY.map((pool) => (
              <PoolStatusListItem>
                <span>{pool.value}</span>
                <Ticker>
                  <img src={IcAleo} alt="Aleo Icon" />
                  <span>ALEO</span>
                </Ticker>
              </PoolStatusListItem>
            ))}
          </PoolStatusList>
        </PoolStatusListWrapper>
      </ManageInnerWrapper>
    </ManageWrapper>
  );
};

export default ManageStaking;

const TitleMediumText = styled.span`
  ${({ theme }) => theme.fonts.Title_Medium};
`;

const BodyMediumText = styled.span`
  ${({ theme }) => theme.fonts.Body_Text_Medium};
`;

const BodyTextSmall = styled.span`
  ${({ theme }) => theme.fonts.Body_Text_Small};
`;

const ContentTitle = styled(TitleMediumText)`
  width: 100%;
  text-align: center;
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

const ManageWrapper = styled.div`
  border-radius: 20px;
  background: #33343e;
  color: #fff;
`;

const ManageInnerWrapper = styled.div`
  padding: 28px 36px 36px 36px;
  display: flex;
  flex-direction: column;
`;

const ValidatorProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const ProfileImg = styled.div`
  padding: 12px;
  background: linear-gradient(321deg, #3e404c 10.88%, #09090a 96.33%);
  border-radius: 30px;
  box-shadow: 5px 7px 20px 0px rgba(0, 0, 0, 0.1),
    20px 30px 36px 0px rgba(0, 0, 0, 0.09),
    46px 67px 49px 0px rgba(0, 0, 0, 0.05),
    81px 119px 58px 0px rgba(0, 0, 0, 0.01),
    127px 186px 63px 0px rgba(0, 0, 0, 0);
  img {
    width: 66px;
    height: 66px;
  }
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4px;
  gap: 4px;

  span {
    ${({ theme }) => theme.fonts.Label_Small};
    &:first-child {
      ${({ theme }) => theme.fonts.Title_Small};
    }
  }
`;

const ValidatorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
`;

const OfficialLink = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 4px;

  span {
    ${({ theme }) => theme.fonts.Body_Text_Small};
  }
  img {
    width: 18px;
    height: 18px;
  }
`;

const ValidatorInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 240px;
  padding: 10px 14px;
  border-radius: 20px;
  background-color: #33343e;

  span {
    &:first-child {
      ${({ theme }) => theme.fonts.Label_Medium_3};
      color: #d1d1d1;
    }
  }
`;

const PoolStatusInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PoolStatusTitleText = styled.span`
  ${({ theme }) => theme.fonts.Body_Text_Large_2};
`;

const PoolStatusSubInfoWrapper = styled.div`
  width: 100%;
  padding: 0 7px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PoolStatusValueText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    &:first-child {
      color: #657dfa;
      ${({ theme }) => theme.fonts.Title_Large_2};
    }
  }
`;

const PoolStatusInfoSmallText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;

  span {
    ${({ theme }) => theme.fonts.Label_Medium};
  }
  img {
    width: 12px;
    height: 12px;
  }
`;

const PoolStatusListWrapper = styled.div`
  width: 100%;
  max-height: 140px;
  margin-top: 16px;
  padding: 18px 21px;

  background-color: #292b33;
  border-radius: 20px;
`;

const PoolStatusList = styled.div`
  max-height: 103px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    margin-right: 15px;
    background-color: #09090a;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #fff 0.23%, #edeef4 98.63%);
    border-radius: 20px;
  }
`;

const PoolStatusListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 100px;

  span {
    &:first-child {
      ${({ theme }) => theme.fonts.Body_Text_Large};
    }
  }
`;
