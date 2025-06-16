import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { WindowContext, IWindow } from "./context/window-context";
import { AppConfig } from "./app-config";

function App({ children }: { children?: ReactNode }) {
  const [windowConfig, setWindowConfig] = useState<IWindow[]>(
    []
    // AppConfig.filter((app) => app.title === "About Rapelang")
  );
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

  return (
    <WindowContext.Provider
      value={{ windowConfig, setWindowConfig, allWindowConfig }}
    >
      {children}
    </WindowContext.Provider>
  );
}

export default App;
