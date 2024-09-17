import { IWindow } from "./context/window-context";
import Chrome from "./components/apps/chrome";
import { Calculator, Chrome as ChromeIcon } from "./components/taskbar/images";
export const AppConfig: IWindow[] = [
  {
    title: "Chrome",
    xOffset: 60,
    yOffset: 20,
    zIndex: 41,
    children: <Chrome displayUrl="www.google.com" url={"https://www.google.com/webhp?igu=1"} />,
    isActive: true,
    icon: ChromeIcon
  },
  {
    title: "Calculator",
    yOffset: 70,
    xOffset: 70,
    zIndex: 40,
    width: 355,
    height: 405,
    children: <div className="p-3">Calculator</div>,
    isActive: false,
    icon: Calculator
  },
];
