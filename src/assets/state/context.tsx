import { createContext, useContext } from "react";
import type { stateType } from "@/assets/types";

export const StateContext = createContext<stateType | null>(null);

export const useStateContext = (): stateType => {
  const context = useContext(StateContext);
  if (!context) throw new Error("Error state Context");
  return context;
};
