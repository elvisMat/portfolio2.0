import { createContext, CSSProperties } from "react";
import { AppConfigType } from "../app-config";

export type WindowTitles = "About Me" | "Chrome" | "Calculator"| "Settings";
export type WindowIds = "about-me" | "chrome" | "calculator"| "settings";
export interface IWindow extends CSSProperties {
  className?: string;
  xOffset: number | string;
  yOffset: number | string;
  title?: WindowTitles;
  children?: React.ReactNode;
  contextMenu?: React.ReactNode;
  isActive?: boolean;
  hidden?: boolean;
  isOpenByDefault?: boolean;
  icon?: string;
  appId?: WindowIds;
  isMaximisable?: boolean;
  center?: boolean; // controls whether the window is initially open at the center
}
export interface IWindowContext {
  windowConfig: AppConfigType;
  setWindowConfig: (config: AppConfigType | (() => AppConfigType)) => void;
  allWindowConfig: AppConfigType;
  closeWindow: (windowId: WindowIds) => void;
  minimizeWindow: (windowId: WindowIds) => void;
  maximizeWindow: (windowId: WindowIds) => void;
  activateWindow: (windowId: WindowIds) => void;
  openWindow: (windowId: WindowIds) => void;
}
export const WindowContext = createContext<IWindowContext | null>(null);
