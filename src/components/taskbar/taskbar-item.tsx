import React from "react";
import { TaskbarItemProps } from "../../interfaces/taskbar";
import { IWindow, WindowContext } from "../../context/window-context";

function TaskbarItem({ image, windowId, onToggle }: TaskbarItemProps) {
  const appContext = React.useContext(WindowContext);

  const app = appContext?.allWindowConfig[windowId];
  if (!app) {
    throw new Error("App not found in context");
  }
  function _onLaunch() {
    // let newAppConfig = appContext?.windowConfig;
    // let app = appContext?.allWindowConfig.find((app) => app.title === title);
    // if (newAppConfig) {
    //   const activeAppIndex = newAppConfig.findIndex(
    //     (app) => app.title === title
    //   );
    //   if (activeAppIndex != -1) {
    //     let activeApp = appContext?.windowConfig[activeAppIndex];
    //     if (!activeApp?.isActive) {
    //       activeApp = { ...activeApp!, isActive: true, hidden: false };
    //     }
    //     newAppConfig[activeAppIndex] = activeApp;
    //     appContext?.setWindowConfig(newAppConfig);
    //   } else {
    //     if (app) {
    //       app = { ...app, isActive: true, zIndex: 41, hidden: false };
    //       let inactiveApps: IWindow[] = newAppConfig.map((el) => {
    //         return { ...el, isActive: false, zIndex: 40 };
    //       });
    //       inactiveApps.push(app);
    //       appContext?.setWindowConfig(inactiveApps);
    //     }
    //   }
    //   onToggle();
    // }
  }
  return (
    <div
      onClick={() => _onLaunch()}
      className="flex gap-2 items-center cursor-pointer hover:bg-highlight hover:text-dark-base p-2"
    >
      <img src={image} className="w-[13%]" alt={`Image of ${app.title}`} />
      <div className="">{app.title}</div>
    </div>
  );
}

//Memo help it not redownload images
export default React.memo(TaskbarItem);
