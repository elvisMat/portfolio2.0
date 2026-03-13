import { IWindow, WindowIds } from "./context/window-context";
import Chrome from "./components/apps/chrome";
import {
  Calculator as CalculatorImage,
  Chrome as ChromeIcon,
  FileManager as FileManagerIcon,
} from "./components/taskbar/images";
import Calculator from "./components/apps/calculator";
import AboutMe from "./components/apps/about-me";
export type AppConfigType =
  | {
      [key in WindowIds]: IWindow;
    }
  | null;

export const AppConfig: AppConfigType = {
  chrome: {
    title: "Chrome",
    xOffset: 65,
    yOffset: 45,
    zIndex: 41,

    children: (
      <Chrome
        displayUrl="www.google.com"
        url={"https://www.google.com/webhp?igu=1"}
      />
    ),
    isActive: true,
    icon: ChromeIcon,
    transitionTo: () => {},
  },
  calculator: {
    title: "Calculator",
    yOffset: 70,
    xOffset: 70,
    zIndex: 40,
    width: 345,
    height: 435,
    children: <Calculator />,
    isActive: true,
    icon: CalculatorImage,
    transitionTo: () => {},
  },
  "about-me": {
    title: "About Me",
    xOffset: 65,
    yOffset: 45,
    zIndex: 40,
    width: 1000,
    height: 635,
    children: <AboutMe />,
    isActive: true,
    icon: FileManagerIcon,
    transitionTo: () => {},
  },
};
export function searchKeysByTitle(title: string): string[] {
  if (AppConfig === null) return [];
  return Object.entries(AppConfig)
    .filter(([_, config]) =>
      config.title?.toLowerCase().includes(title.toLowerCase())
    )
    .map(([key]) => key);
}
