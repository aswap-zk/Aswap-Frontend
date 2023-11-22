import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface WalletState {
  status: "initial" | "fail" | "success";
  address: string;
}

export const walletStateAtom = atom<WalletState>({
  key: "walletStateAtom",
  default: {
    status: "initial",
    address: "",
  },
  effects_UNSTABLE: [persistAtom],
});
