import React, { ReactNode, useContext, useEffect, useState } from "react";
import {
  IWindowContext,
  WindowContext,
  IWindow,
} from "./context/window-context";
import { AppConfig } from "./app-config";

function App({ children }: { children?: ReactNode }) {
  const [windowConfig, setWindowConfig] = useState<IWindow[]>([]);

  useEffect(() => {
    setWindowConfig(AppConfig.filter((app) => app.isOpenByDefault));
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
    <WindowContext.Provider value={{ windowConfig, setWindowConfig }}>
      {children}
    </WindowContext.Provider>
  );
}

export default App;
