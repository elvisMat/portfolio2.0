import React from "react";
import { TaskbarItemProps } from "../../interfaces/taskbar";
import { IWindow, WindowContext } from "../../context/window-context";
import { AppConfig } from "../../app-config";

function TaskbarItem({ image, title, onToggle }: TaskbarItemProps) {
  const appContext = React.useContext(WindowContext);

  function _onLaunch() {
    let newAppConfig = appContext?.windowConfig;
    let app = AppConfig.find((app) => app.title === title);

    if (newAppConfig) {
      const activeAppIndex = newAppConfig.findIndex(
        (app) => app.title === title
      );
      if (activeAppIndex != -1) {
        let activeApp = appContext?.windowConfig[activeAppIndex];
        if (!activeApp?.isActive) {
          activeApp = { ...activeApp!, isActive: true };
        }
        newAppConfig[activeAppIndex] = activeApp;

        appContext?.setWindowConfig(newAppConfig);
      } else {
        if (app) {
          app = { ...app, isActive: true, zIndex: 41 };
          let inactiveApps: IWindow[] = newAppConfig.map((el) => {
            return { ...el, isActive: false, zIndex: 40 };
          });
          inactiveApps.push(app);
          appContext?.setWindowConfig(inactiveApps);
        }
      }
      onToggle();
    }
  }
  return (
    <div
      onClick={() => _onLaunch()}
      className="flex gap-2 items-center cursor-pointer hover:bg-highlight hover:text-dark-base p-2"
    >
      <img src={image} className="w-[13%]" alt={`Image of ${title}`} />
      <div className="">{title}</div>
    </div>
  );
}

//Memo help it not redownload images
export default React.memo(TaskbarItem);
