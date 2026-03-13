// import React +
// from "react";

import { cn } from "../../lib/utils";
import { useIsHovered } from "../../hooks/useIsHovered";
import {  WindowIds } from "../../context/window-context";
import { useWindowContext } from "../../hooks/useWindowContext";
function TabItem({
  image,
  isActive,
  title,
  appId
}: {
  image: string;
  isActive: boolean;
  title: string;
  appId: WindowIds;
}) {
  const { _onMouseEnter, _onMouseLeave, hovered } = useIsHovered();
  const appContext = useWindowContext()

  const _onClick = () => {
    if (isActive) {
      console.log("Window is already active");

    } else {
      appContext?.activateWindow(appId);
      console.log("Setting window active");
    }
  };
  return (
    <div
      onClick={_onClick}
      onMouseEnter={() => _onMouseEnter()}
      onMouseLeave={() => _onMouseLeave()}
      className={cn(
        "flex items-center justify-center flex-col relative  cursor-pointer z-30"
      )}
    >
      {isActive ? (
        <div className="w-1 h-[110%] bg-primary-accent absolute -left-3"></div>
      ) : (
        <div className="w-1 h-1 rounded-full bg-primary-accent absolute -left-3 top-[30%]"></div>
      )}
      <img
        src={image}
        className={cn("w-[23px]", hovered ? "opacity-80" : "opacity-100")}
        alt={title + " Image"}
      />
    </div>
  );
}
export default TabItem;
