import { IWindow, WindowIds } from "./context/window-context";
import Chrome from "./components/apps/chrome";
import {
  Calculator as CalculatorImage,
  Chrome as ChromeIcon,
  FileManager as FileManagerIcon,
} from "./components/taskbar/images";
import Calculator from "./components/apps/calculator";
import AboutMe from "./components/apps/about-me";
export type AppConfigType = {
  [key in WindowIds]: IWindow;
};

export const AppConfig: AppConfigType = {
  chrome: {
    title: "Chrome",
    xOffset: 60,
    yOffset: 20,
    zIndex: 41,

    children: (
      <Chrome
        displayUrl="www.google.com"
        url={"https://www.google.com/webhp?igu=1"}
      />
    ),
    isActive: false,
    icon: ChromeIcon,
  },
  calculator: {
    title: "Calculator",
    yOffset: 70,
    xOffset: 70,
    zIndex: 40,
    width: 345,
    height: 435,
    children: <Calculator />,
    isActive: false,
    icon: CalculatorImage,
  },
  "about-me": {
    title: "About Me",
    yOffset: 20,
    xOffset: 70,
    zIndex: 40,
    width: 1000,
    height: 635,
    children: <AboutMe />,
    isActive: false,
    icon: FileManagerIcon,
  },
};
export function searchKeysByTitle(title: string): string[] {
  return Object.entries(AppConfig)
    .filter(([_, config]) =>
      config.title?.toLowerCase().includes(title.toLowerCase())
    )
    .map(([key]) => key);
}
