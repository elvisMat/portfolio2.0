import { useContext } from "react";
import { WindowContext } from "../context/window-context";

export const useWindowContext = () => {
  const windowContext = useContext(WindowContext);
  if (!windowContext) {
    throw new Error("useWindowContext must be used within a WindowProvider");
  }
  return windowContext;
};
