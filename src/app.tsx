import  {
  ReactNode,
  // useContext,
  useMemo,
  useState,
} from "react";
import { WindowContext, WindowIds } from "./context/window-context";
import { AppConfig, AppConfigType } from "./app-config";

function App({ children }: { children?: ReactNode }) {
  const [windowConfig, setWindowConfig] = useState<AppConfigType>({
    "about-me": {
      ...AppConfig!["about-me"],
      appId: "about-me",
      isActive: true,
      hidden: false,
      opacity: 1,
      zIndex: 41,
    },
  } as AppConfigType);
  // const [windowZIndexCounter, setWindowZIndexCounter] = useState(41);

  // AppConfig.filter((app) => app.title === "About Me")
  const allWindowConfig = useMemo(() => AppConfig, []);

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
    newConfig[windowId] = { ...newConfig[windowId], hidden: true,isActive:false };
  
    setWindowConfig(newConfig);
  };
  const activateWindow = (windowId: WindowIds) => {
    if (!windowConfig) return;
    let newConfig: AppConfigType = { ...windowConfig };
    newConfig[windowId] = { ...newConfig[windowId], isActive: true,hidden:false,opacity:1,zIndex:41 };
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
        //maximizeWindow: (windowId: WindowIds) => {},
        // windowZIndexCounter,
        // setWindowZIndexCounter,

        
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

export default App;
