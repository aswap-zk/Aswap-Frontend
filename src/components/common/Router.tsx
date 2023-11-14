import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Swap from "../../pages/Swap/Swap";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
