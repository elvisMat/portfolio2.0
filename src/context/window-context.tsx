import { createContext, CSSProperties } from "react";

export type WindowTitles = "About Rapelang" | "Chrome" | "Calculator";
export interface IWindow extends CSSProperties {
  className?: string;
  xOffset: number;
  yOffset: number;
  title?: WindowTitles;
  children?: React.ReactNode;
  isActive?: boolean;
  isOpenByDefault?: boolean;
  icon?: string;
}
export interface IWindowContext {
  windowConfig: IWindow[];
  setWindowConfig: (config: IWindow[] | (() => IWindow[])) => void;
}
export const WindowContext = createContext<IWindowContext | null>(null);
