import React, { CSSProperties, ReactNode, useEffect } from "react";
import CloseButton from "./close-button";
import ExpandButton from "./expand-button";
import MenuButton from "./menu-button";
import MinimiseButton from "./minimise-button";
import { cn } from "../../lib/utils";
import { IWindow, WindowContext } from "../../context/window-context";
// 412B22
// 32211A
function Window({
  children,
  width = 795,
  height = 560,
  className,
  xOffset = 60,
  yOffset = 20,
  zIndex = 40,
  title,
  ...rest
}: IWindow) {
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
    top: `${yOffset}px`,
    left: `${xOffset}px`,
    zIndex: zIndex,
  };

  const [isDragging, setIsDragging] = React.useState(false);
  const moveOffset = React.useRef({ x: 0.1, y: 0.1 });
  const appContext = React.useContext(WindowContext);

  function _onMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    console.log("mouse down");
    setIsDragging(true);
  }
  function _onMouseLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    console.log("mouse leave");
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
    const x = e.movementX;
    const y = e.movementY;
    appContext?.setWindowConfig(() => {
      let thisApp = appContext?.windowConfig.find((app) => app.title === title);
      if (!thisApp) return appContext?.windowConfig;
      thisApp.xOffset += x;
      thisApp.yOffset += y;
      const newConfig = appContext?.windowConfig.map((app) => {
        if (app.title === title) return thisApp;
        return app;
      });
      return newConfig;
    });
    console.log("mouse move", x, y);
  }

  function _onClose() {
    let newConfig = appContext?.windowConfig.filter((app) => {
      return app.title !== title;
    });
    if (newConfig && newConfig.length > 0)
      appContext?.setWindowConfig(newConfig);
    appContext?.setWindowConfig([]);
  }
  function _onMinimise() {
    appContext?.setWindowConfig(() => {
      const newConfig = appContext?.windowConfig.map((app) => {
        if (app.title === title) {
          app.width = 0;
          app.height = 0;
          app.isActive = false;
          app.opacity = 0;
          return app;
        }
        return app;
      });
      return newConfig;
    });
  }
  return (
    <div
      style={{ ...styles, ...rest }}
      className={cn(
        " border border-stone-700  rounded-2xl  bg-dark-highlight  absolute text-primary-accent",
        className
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
          <MinimiseButton onClick={_onMinimise} />
          <ExpandButton />
          <CloseButton onClick={_onClose} />
        </div>
      </div>
      {children}
    </div>
  );
}

export default Window;
