import styled from "styled-components";
import LogoWhite from "../../assets/icons/logo-white.svg";
import LogoBlack from "../../assets/icons/logo-black.svg";
import IcWallet from "../../assets/icons/Header/ic-wallet.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import { useCallback } from "react";
import { Wallet } from "../Wallet/Wallet";
import { useWalletModal } from "@demox-labs/aleo-wallet-adapter-reactui";

interface HeaderProps {
  type?: string;
}

const Header = (props: HeaderProps) => {
  const { type } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { publicKey, wallet, disconnect } = useWallet();

  const { setVisible } = useWalletModal();

  const signingAleo = useCallback(async () => {
    try {
      if (!publicKey) throw new WalletNotConnectedError();

      const message = "a message to sign";

      const bytes = new TextEncoder().encode(message);
      const signatureBytes = await (
        wallet?.adapter as LeoWalletAdapter
      ).signMessage(bytes);
      const signature = new TextDecoder().decode(signatureBytes);
      alert("Signed message: " + signature);
    } catch {
      setVisible(true);
    }
  }, [wallet, publicKey, setVisible]);

  return (
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
        {/* <Wallet /> */}
          <ConnectButton onClick={signingAleo}>
            <img src={IcWallet} />
            <span>Connect wallet</span>
          </ConnectButton>
      </HeaderWrapper>
    </Root>
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
  align-items: center;
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

const ConnectButton = styled.div`
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  border-radius: 20px;
  background: #6047f4;
  span {
    color: #fff;
    ${({ theme }) => theme.fonts.Body_Text_Large};
  }
`;
