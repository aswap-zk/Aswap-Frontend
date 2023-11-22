import { atom } from "recoil";

type ModalType = "none" | "request" | "approved" | "error";

export const modalTypeAtom = atom<ModalType>({
  key: "modalTypeAtom",
  default: "none",
});
