import React from "react";
import CloseButton from "./close-button";
import ExpandButton from "./expand-button";
import MenuButton from "./menu-button";
import MinimiseButton from "./minimise-button";
import { cn } from "../../lib/utils";
import { IWindow, WindowContext } from "../../context/window-context";
import { useClickIn } from "../../hooks/useClickIn";
import { useWindowContext } from "@/hooks/useWindowContext";
// 412B22
// 32211A
function Window({
  children,
  width = 795,
  height = 560,
  className,
  xOffset = 60,
  yOffset = 70,
  zIndex = 40,
  title,
  center = false,
  isMaximisable = true,
  ...rest
}: IWindow) {
  const styles = {
    width: typeof width === "string" ? width : `${width}px`,
    height: typeof height === "string" ? height : `${height}px`,
    top: typeof yOffset === "string" ? yOffset : `${yOffset}px`,
    left: typeof xOffset === "string" ? xOffset : `${xOffset}px`,
    zIndex: zIndex,
  };
  const [isDragging, setIsDragging] = React.useState(false);
  // const moveOffset = React.useRef({ x: 0.1, y: 0.1 });
  const appContext = React.useContext(WindowContext);
  const ref = useClickIn(() => {
    if (appContext) {
      _setWindowActive();
    }
  });

  const { minimizeWindow, maximizeWindow } = useWindowContext();
  const _setWindowActive = () => {};
  function _onMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    console.log("mouse down");
    setIsDragging(true);
  }
  function _onMouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    console.log("mouse up");
  }
  function _onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) return;
    // const x = e.clientX - moveOffset.current.x;
    // const y = e.clientY - moveOffset.current.y;
  }
  function _onClose() {
    console.log("close window");
  }

  if (!rest.appId) {
    throw new Error("Window must have an appId");
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      hidden={rest.hidden}
      style={{ ...styles, ...rest }}
      className={cn(
        " border border-stone-700 animate-all rounded-2xl  bg-dark-highlight  absolute text-primary-accent",
        className,
        center ? "translate-x-[-50%] translate-y-[-50%]" : "" // center the window if center is true
      )}
    >
      <div className="flex justify-between items-center ml-2">
        <div
          onMouseDown={_onMouseDown}
          onMouseMove={_onMouseMove}
          onMouseUp={_onMouseUp}
          className="cursor-move text-center flex-1 font-medium"
        >
          {title}
        </div>
        <div className=" m-2 flex gap-2 items-center mr-3 justify-end">
          <MenuButton />
          <MinimiseButton onClick={() => minimizeWindow(rest.appId!)} />
          {isMaximisable && (
            <ExpandButton onClick={() => maximizeWindow(rest.appId!)} />
          )}
          <CloseButton onClick={_onClose} />
        </div>
      </div>
      {children}
    </div>
  );
}

export default Window;
