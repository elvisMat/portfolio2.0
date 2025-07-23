import { createContext, CSSProperties } from "react";
import { WindowState } from "../hooks/useWindowStateMachine";
import { AppConfigType } from "../app-config";

export type WindowTitles = "About Me" | "Chrome" | "Calculator";
export type WindowIds = "about-me" | "chrome" | "calculator";
export interface IWindow extends CSSProperties {
  className?: string;
  xOffset: number;
  yOffset: number;
  title?: WindowTitles;
  children?: React.ReactNode;
  isActive?: boolean;
  hidden?: boolean;
  isOpenByDefault?: boolean;
  icon?: string;
  defaultState?: WindowState;
}
export interface IWindowContext {
  windowConfig: AppConfigType;
  setWindowConfig: (config: AppConfigType | (() => AppConfigType)) => void;
  allWindowConfig: AppConfigType;
}
export const WindowContext = createContext<IWindowContext | null>(null);
