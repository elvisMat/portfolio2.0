import  { useContext } from "react";
import { HomeItemProps } from "../../interfaces/taskbar";
import { cn } from "../../lib/utils";
import { useIsHovered } from "../../hooks/useIsHovered";
import { IWindow, WindowContext } from "../../context/window-context";
import { AppConfigType } from "../../app-config";
function HomeItem({ image, windowId }: HomeItemProps) {
  const { hovered } = useIsHovered();
  const appContext = useContext(WindowContext);

  let app = appContext?.allWindowConfig![windowId];
  if (!app) {
    throw new Error("App not found in context");
  }

  const _onClick = () => {
    let existingAppIndex: IWindow | undefined = undefined;
    if (appContext?.windowConfig) {
      existingAppIndex = appContext?.windowConfig[windowId];
    }
    if (existingAppIndex) {
      existingAppIndex = {
        ...existingAppIndex,
        isActive: true,
        zIndex: 41,
        hidden: false,
        opacity: 1,
      };
      const prevConfig = appContext?.windowConfig || {};
      const newConfig: AppConfigType = {
        ...prevConfig,
        [windowId]: existingAppIndex,
      } as AppConfigType;

      appContext?.setWindowConfig(newConfig);
    } else {
      const prevConfig = appContext?.windowConfig || {};
      const newConfig: AppConfigType = {
        ...prevConfig,
        [windowId]: {...app, appId:windowId},
      } as AppConfigType;
      appContext?.setWindowConfig(newConfig);
    }
  };
  return (
    <div
      onClick={_onClick}
      // onMouseEnter={() => _onMouseEnter()}
      // onMouseLeave={() => _onMouseLeave()}
      className={cn(
        "flex items-center justify-center flex-col  cursor-pointer z-30"
      )}
    >
      <img
        src={image}
        className={cn("w-[40px]", hovered ? "opacity-80" : "opacity-100")}
        alt="Chrome icon"
      />
      <div className={cn("text-white mt-1")}>{app.title}</div>
    </div>
  );
}
export default HomeItem;
