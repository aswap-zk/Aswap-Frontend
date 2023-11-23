import styled from "styled-components";
import LogoWhite from "../../assets/icons/logo-white.svg";
import LogoBlack from "../../assets/icons/logo-black.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Wallet from "../Wallet/Wallet";

interface HeaderProps {
  type?: string;
}

const Header = (props: HeaderProps) => {
  const { type } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Root>
        <HeaderWrapper>
          <MenuWrapper>
            {type === "intro" ? (
              <>
                <Logo src={LogoWhite} onClick={() => navigate("/")} />
                <MenuItem>Docs</MenuItem>
                <MenuItem>LV99</MenuItem>
              </>
            ) : (
              <>
                <Logo src={LogoBlack} onClick={() => navigate("/")} />
                <AppMenuItem
                  onClick={() => navigate("/swap")}
                  $active={pathname.includes("swap") ? true : false}
                >
                  Swap
                </AppMenuItem>
                <AppMenuItem
                  onClick={() => navigate("/deposit")}
                  $active={pathname.includes("deposit") ? true : false}
                >
                  Deposit
                </AppMenuItem>
                <AppMenuItem
                  onClick={() => navigate("/staking")}
                  $active={pathname.includes("staking") ? true : false}
                >
                  Staking
                </AppMenuItem>
              </>
            )}
          </MenuWrapper>
          {type !== "intro" && <Wallet />}
        </HeaderWrapper>
      </Root>
    </>
  );
};

export default Header;

const Root = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 12px 30px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const MenuWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 25px;
`;

const Logo = styled.img`
  height: 28px;
  cursor: pointer;
`;

const MenuItem = styled.div`
  color: #fff;
  ${({ theme }) => theme.fonts.Body_Text_Large_2};
  cursor: pointer;
`;

const AppMenuItem = styled(MenuItem)<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? "#15151A" : "#818187")};
  cursor: pointer;
`;
