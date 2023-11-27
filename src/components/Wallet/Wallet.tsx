import styled from "styled-components";
import IcWallet from "../../assets/icons/Header/ic-wallet.svg";
import { WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import { useCallback, useEffect, useState } from "react";
import { useWalletModal } from "@demox-labs/aleo-wallet-adapter-reactui";
import { useRecoilState } from "recoil";
import { walletStateAtom } from "../../atom/wallet";
import IcInfo from "../../assets/icons/Header/ic-info.svg";
import IcLeo from "../../assets/icons/Header/ic-leoCircle.svg";
import IcClose from "../../assets/icons/Header/ic-closeWhite.svg";
import IcCopy from "../../assets/icons/Header/ic-copy.svg";
import { truncateString } from "../../utils/walletAddressFormatter";
import IcLeoLogo from "../../assets/icons/ic-leoLogo.svg";

const Wallet = () => {
  const [walletInfo, setWalletInfo] = useRecoilState(walletStateAtom);
  const [isWalletVisible, setIsWalletVisible] = useState(false);
  const { publicKey, wallet, disconnect, disconnecting } = useWallet();
  const { setVisible } = useWalletModal();

  useEffect(() => {
    if (publicKey === null) {
      setWalletInfo({ status: "initial", address: "" });
    } else {
      setWalletInfo({ status: "success", address: publicKey });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  const signingAleo = useCallback(async () => {
    try {
      if (!publicKey) throw new WalletNotConnectedError();

      const message = "a message to sign";
      const bytes = new TextEncoder().encode(message);
      const signatureBytes = await (
        wallet?.adapter as LeoWalletAdapter
      ).signMessage(bytes);
      const signature = new TextDecoder().decode(signatureBytes);

      setWalletInfo({ status: "success", address: signature });
    } catch {
      setVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet, publicKey, setVisible]);

  function toggleWalletVisibility() {
    setIsWalletVisible(!isWalletVisible);
  }

  function handleDisconnect() {
    disconnect()
      .then(() => {
        console.log(`publickKey: ${publicKey}\nwallet: ${wallet}`);
        setWalletInfo({ status: "initial", address: "" });
        setIsWalletVisible(false);
      })
      .catch(() => {});
  }

  return (
    <>
      <WalletContainer
        onMouseLeave={() =>
          walletInfo.status === "success" && setIsWalletVisible(false)
        }
      >
        <ConnectButton
          onMouseEnter={() =>
            walletInfo.status === "success" && setIsWalletVisible(true)
          }
          onClick={() =>
            (walletInfo.status === "initial" && signingAleo()) ||
            (walletInfo.status === "success" && toggleWalletVisibility())
          }
          $walletStatus={walletInfo.status}
          $isWalletVisible={isWalletVisible}
        >
          <img
            src={
              walletInfo.status === "success"
                ? IcLeo
                : walletInfo.status === "fail"
                ? IcInfo
                : IcWallet
            }
          />
          <span>
            {walletInfo.status === "success"
              ? truncateString(walletInfo.address)
              : walletInfo.status === "fail"
              ? "Wrong Network"
              : "Connect wallet"}
          </span>
        </ConnectButton>
        {isWalletVisible && (
          <WalletInfoWrapper>
            <WalletInfoContent>
              <WalletTitleWrapper>
                <span>Connected Wallet</span>
                <img src={IcClose} onClick={() => setIsWalletVisible(false)} />
              </WalletTitleWrapper>
              <WalletItem>
                <WalletNetworkWrapper>
                  <img src={IcLeoLogo} />
                  <span>LEO</span>
                </WalletNetworkWrapper>
                <WalletAddressWrapper>
                  <WalletSubTitleText>Address</WalletSubTitleText>
                  <WalletAddress>
                    {truncateString(walletInfo.address, 10, 4)}
                  </WalletAddress>
                  <CopyIconWrapper
                    onClick={() =>
                      navigator.clipboard.writeText(walletInfo.address)
                    }
                  >
                    <img src={IcCopy} />
                  </CopyIconWrapper>
                </WalletAddressWrapper>
              </WalletItem>
              <DisconnectButton onClick={handleDisconnect}>
                Disconnect
              </DisconnectButton>
            </WalletInfoContent>
          </WalletInfoWrapper>
        )}
      </WalletContainer>
    </>
  );
};

export default Wallet;

const WalletContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
`;

const ConnectButton = styled.div<{
  $walletStatus?: "initial" | "fail" | "success";
  $isWalletVisible: boolean;
}>`
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: ${({ $walletStatus }) =>
    $walletStatus === "fail" ? "auto" : "pointer"};

  border-radius: 20px;
  background: ${({ $walletStatus, $isWalletVisible }) =>
    $walletStatus === "success"
      ? $isWalletVisible
        ? "#15151A"
        : "#33343E"
      : $walletStatus === "fail"
      ? "#FF7979"
      : "#6047f4"};

  span {
    color: #fff;
    ${({ theme }) => theme.fonts.Body_Text_Large};
  }
`;

const WalletInfoContent = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: flex-end;
  gap: 25px;

  border-radius: 20px;
  background: #15151a;
  box-shadow: 0px 0px 20px 0px rgba(9, 9, 10, 0.1);
  color: #fff;
`;

const WalletInfoWrapper = styled.div`
  display: flex;
  width: 460px;
`;

const WalletTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 6px;

  span {
    ${({ theme }) => theme.fonts.Body_Text_Large};
  }
  img {
    width: 20px;
    height: 20px;

    cursor: pointer;
  }
`;

const WalletItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 23px;

  border-radius: 14px;
  background: #33343e;
`;

const WalletNetworkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 28px;
    height: 28px;
  }

  span {
    ${({ theme }) => theme.fonts.Body_Text_Large};
  }
`;

const WalletAddressWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const WalletSubTitleText = styled.span`
  ${({ theme }) => theme.fonts.Label_Medium_2};
  color: #bdbdc5;
`;

const WalletAddress = styled.span`
  ${({ theme }) => theme.fonts.Body_Text_Medium_3};
`;

const CopyIconWrapper = styled.div`
  padding: 8px;
  border-radius: 12px;
  border: 1px solid #15151a;
  background: #292b33;
  img {
    width: 16px;
    height: 16px;
  }
  cursor: pointer;
`;

const DisconnectButton = styled.div`
  padding: 10px 16px;

  ${({ theme }) => theme.fonts.Body_Text_Small};
  color: #e8e8ee;
  border-radius: 10px;
  background: #3e404c;
  cursor: pointer;
`;
