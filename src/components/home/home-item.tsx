import React, { useContext } from "react";
import { HomeItemProps } from "../../interfaces/taskbar";
import { cn } from "../../lib/utils";
import { useIsHovered } from "../../hooks/useIsHovered";
import { WindowContext } from "../../context/window-context";
function HomeItem({ image, title }: HomeItemProps) {
  const { _onMouseEnter, _onMouseLeave, hovered } = useIsHovered();
  const appContext = useContext(WindowContext);

  const _onClick = () => {
    const existingAppIndex = appContext?.windowConfig.findIndex(
      (el) => el.title === title
    );

    let app = appContext?.allWindowConfig.find((el) => el.title === title);

    if (!app) {
      throw new Error("App does not have an app config");
    }
    console.log(existingAppIndex);
    if (existingAppIndex != -1) {
      appContext?.setWindowConfig?.(
        appContext?.windowConfig?.map((el) => {
          if (el.title === title) {
            return {
              ...el,
              isActive: true,
              hidden: false,
              zIndex: 41,

              opacity: 1,
            };
          }
          return { ...el, zIndex: 0, isActive: false };
        })
      );
    } else {
      appContext?.setWindowConfig([
        ...appContext.windowConfig,
        { ...app, isActive: true, zIndex: 41, hidden: false },
      ]);
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
      <div className={cn("text-white mt-1")}>{title}</div>
    </div>
  );
}
export default HomeItem;
