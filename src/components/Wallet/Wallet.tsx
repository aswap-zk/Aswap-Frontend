import React, { FC, useMemo } from "react";
import { WalletProvider } from "@demox-labs/aleo-wallet-adapter-react";
import {
  WalletConnectButton,
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@demox-labs/aleo-wallet-adapter-reactui";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import {
  DecryptPermission,
  WalletAdapterNetwork,
} from "@demox-labs/aleo-wallet-adapter-base";
import styled from "styled-components";

// Default styles that can be overridden by your app

export const Wallet: FC = () => {
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: "ASWAP Demo App",
      }),
    ],
    []
  );

  return (
    <WalletProvider
      wallets={wallets}
      decryptPermission={DecryptPermission.UponRequest}
      network={WalletAdapterNetwork.Testnet}
      autoConnect
    >
      <WalletModalProvider>
        <WalletConnect>
          <WalletMultiButton />
          <WalletConnectButton />
          <WalletDisconnectButton />
        </WalletConnect>
        {/* <WalletModal /> */}
        {/* <WalletModalButton /> */}
        {/* <SignMessage /> */}
        {/* <RequestRecord /> */}
        {/* <RequestTransactionHistory /> */}
      </WalletModalProvider>
    </WalletProvider>
  );
};

const WalletConnect = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;
