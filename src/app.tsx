import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { WindowContext, IWindow, WindowIds } from "./context/window-context";
import { AppConfig, AppConfigType } from "./app-config";

function App({ children }: { children?: ReactNode }) {
  const [windowConfig, setWindowConfig] = useState<AppConfigType>(null);

  // AppConfig.filter((app) => app.title === "About Me")
  const allWindowConfig = useMemo(() => AppConfig, []);

  useEffect(() => {
    // setWindowConfig(AppConfig.filter((app) => app.isOpenByDefault));
    // PRE_PROCUCTION: Uncomment the code below to persist window configuration
    // const data = localStorage.getItem('window-config')
    // if (!data) {
    //   setWindowConfig(AppConfig)
    //   localStorage.setItem('window-config', JSON.stringify(AppConfig))
    // }
    // else {
    //   setWindowConfig(JSON.parse(data))
    // }
  }, []);
  const closeWindow = (windowId: WindowIds) => {
    if (!windowConfig) return;
    let newConfig: AppConfigType = { ...windowConfig };
    delete newConfig![windowId];
    console.log(newConfig);
    setWindowConfig(newConfig);
  };

  const minimizeWindow = (windowId: WindowIds) => {
    if (!windowConfig) return;
    let newConfig: AppConfigType = { ...windowConfig };
    newConfig[windowId] = { ...newConfig[windowId], hidden: true };
    console.log(newConfig);
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
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

export default App;
