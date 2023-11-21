import GlobalStyle from "./styles/globalStyles";
import Router from "./components/common/Router";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { useMemo } from "react";
import { WalletProvider } from "@demox-labs/aleo-wallet-adapter-react";
import { WalletModalProvider } from "@demox-labs/aleo-wallet-adapter-reactui";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import {
  DecryptPermission,
  WalletAdapterNetwork,
} from "@demox-labs/aleo-wallet-adapter-base";

function App() {
  const wallets = useMemo(
    () => [
      new LeoWalletAdapter({
        appName: "Aswap Demo App",
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
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <GlobalStyle />
            <Router />
          </RecoilRoot>
        </ThemeProvider>
      </WalletModalProvider>
    </WalletProvider>
  );
}

export default App;
