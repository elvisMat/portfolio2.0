import React, { useContext } from "react";
import { HomeItemProps } from "../../interfaces/taskbar";
import { cn } from "../../lib/utils";
import { useIsHovered } from "../../hooks/useIsHovered";
import { WindowContext } from "../../context/window-context";
import { AppConfigType } from "../../app-config";
function HomeItem({ image, windowId }: HomeItemProps) {
  const { _onMouseEnter, _onMouseLeave, hovered } = useIsHovered();
  const appContext = useContext(WindowContext);

  let app = appContext?.allWindowConfig[windowId];
  const _onClick = () => {
    const existingAppIndex = appContext?.windowConfig[windowId];
    if (!existingAppIndex) {
      const prevConfig = appContext?.windowConfig || {};
      const newConfig: AppConfigType = { ...prevConfig, [windowId]: app };
      appContext?.setWindowConfig(newConfig);
    }
    console.log(existingAppIndex);
  };
  if (!app) {
    throw new Error("App not found in context");
  }
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
