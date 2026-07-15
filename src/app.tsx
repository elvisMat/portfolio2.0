import {
  ReactNode,
  // useContext,
  useMemo,
  useState,
} from "react";
import { WindowContext, WindowIds } from "./context/window-context";
import { AppConfig, AppConfigType } from "./app-config";

function App({ children }: { children?: ReactNode }) {
  const [windowZIndexCounter, setWindowZIndexCounter] = useState(41);
  const [windowConfig, setWindowConfig] = useState<AppConfigType>({
    "about-me": {
      ...AppConfig!["about-me"],
      appId: "about-me",
      isActive: true,
      hidden: false,
      opacity: 1,
      zIndex: windowZIndexCounter,
      isMaximisable: false,
      xOffset: 200,
    },
  } as AppConfigType);

  // AppConfig.filter((app) => app.title === "About Me")
  const allWindowConfig = useMemo(() => AppConfig, []);

  const closeWindow = (windowId: WindowIds) => {
    if (!windowConfig) return;
    let newConfig: AppConfigType = { ...windowConfig };
    delete newConfig![windowId];
    setWindowConfig(newConfig);
  };

  const minimizeWindow = (windowId: WindowIds) => {
    if (!windowConfig) return;
    let newConfig: AppConfigType = { ...windowConfig };
    newConfig[windowId] = {
      ...newConfig[windowId],
      hidden: true,
      isActive: false,
    };

    setWindowConfig(newConfig);
  };
  const activateWindow = (windowId: WindowIds) => {
    if (!windowConfig) return;
    let newConfig: AppConfigType = { ...windowConfig };
    //set all other windows to inactive
    Object.keys(newConfig).forEach((key) => {
      newConfig[key as WindowIds] = {
        ...newConfig[key as WindowIds],
        isActive: false,
      };
    });
    newConfig[windowId] = {
      ...newConfig[windowId],
      isActive: true,
      hidden: false,
      opacity: 1,
      zIndex: windowZIndexCounter + 1,
    };
    setWindowZIndexCounter((prev) => prev + 1);
    setWindowConfig(newConfig);
  };
  const openWindow = (windowId: WindowIds) => {
    if (!allWindowConfig) return;
    if (!windowConfig) return;

    let newConfig: AppConfigType = { ...windowConfig };
    const appToOpen = allWindowConfig[windowId];
    if (!appToOpen) {
      throw new Error(`App with ID ${windowId} not found in allWindowConfig`);
    }
    //set all other windows to inactive
    Object.keys(newConfig).forEach((key) => {
      newConfig[key as WindowIds] = {
        ...newConfig[key as WindowIds],
        isActive: false,
      };
    });
    newConfig[windowId] = {
      ...appToOpen,
      isActive: true,
      hidden: false,
      opacity: 1,
      zIndex: windowZIndexCounter + 1,
    };
    setWindowZIndexCounter((prev) => prev + 1);
    setWindowConfig(newConfig);
  };
  const maximizeWindow = (windowId: WindowIds) => {
    if (!windowConfig) return;
    let newConfig: AppConfigType = { ...windowConfig };
   
    newConfig[windowId] = {
      ...newConfig[windowId],
      isActive: true,
      hidden: false,
      opacity: 1,
      zIndex: windowZIndexCounter + 1,
      width: "calc(100vw - 50px)",
      height: "100%",
      top: 0,
      left: 50,
      isMaximized: true,
    };
    setWindowZIndexCounter((prev) => prev + 1);
    setWindowConfig(newConfig);
  };

  //restored to original size and position
  const restoreWindow = (windowId: WindowIds) => {
    if (!windowConfig) return;
    let newConfig: AppConfigType = { ...windowConfig };
    newConfig[windowId] = {
      ...newConfig[windowId],
      isMaximized: false,
      width: AppConfig![windowId].width,
      height: AppConfig![windowId].height,
      top: AppConfig![windowId].yOffset,
      left: AppConfig![windowId].xOffset,
      zIndex: windowZIndexCounter + 1,
    };
    setWindowZIndexCounter((prev) => prev + 1);
    setWindowConfig(newConfig);
  };
  return (
    <WindowContext.Provider
      value={{
        windowConfig,
        setWindowConfig,
        allWindowConfig,
        closeWindow,
        minimizeWindow,
        activateWindow,
        openWindow,
        maximizeWindow,
        restoreWindow,
        windowZIndexCounter,
        setWindowZIndexCounter,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

export default App;
