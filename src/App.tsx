import GlobalStyle from "./styles/globalStyles";
import Router from "./components/common/Router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  );
}

export default App;
