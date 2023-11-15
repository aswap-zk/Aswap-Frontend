import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Swap from "../../pages/Swap/Swap";
import Deposit from "../../pages/Deposit/Deposit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/deposit" element={<Deposit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
