// import React from "react";
import { cn } from "../../lib/utils";
import { BarProps } from "../../interfaces/taskbar";
import { BiSolidGrid } from "react-icons/bi";
import Start from "./start";
import { useDisclosure } from "../../hooks/useDisclosure";
// import { WindowContext } from "../../context/window-context";
import TabItem from "../home/tab-item";
import { useWindowContext } from "../../hooks/useWindowContext";
import { useEventListener } from "@/hooks/useEventListener";
function Bar({ className }: BarProps) {
  const { isOpen, onToggle } = useDisclosure();
  const appContext = useWindowContext();
  const appContextArray = Object.values(appContext?.windowConfig || {});
  // const [collapsed, setCollapsed] = React.useState(false);
  // const [hoveringEdge, setHoveringEdge] = React.useState(false);
  useEventListener("window:maximize", (e: CustomEvent) => {
    const { appId } = e.detail;
    console.log(`Window maximized: ${appId}`);
    // setCollapsed(true);
    // Make it collapsible, ie slide and disaper to the left and apper when my cursor is near to the side of the screen
  });

  useEventListener("window:restore", (e: CustomEvent) => {
    const { appId } = e.detail;
    console.log(`Window restored: ${appId}`);
    // setCollapsed(false);
    //remove colaped state
  });

  return (
    <>
      {/* <div
        className="fixed left-0 top-0 h-screen w-4 z-[99999]"
        onMouseEnter={() => setHoveringEdge(true)}
        onMouseLeave={() => setHoveringEdge(false)}
      /> */}
      <div
        className={cn(
          "bg-dark-base glass relative transition-transform duration-300 ease-in-out",
          // collapsed && !hoveringEdge ? "-translate-x-[90%]" : "translate-x-[-10px]",
          className
        )}
      >
        <div className="mt-2 flex flex-col items-center">
          <div role="button" onClick={() => onToggle()} className="">
            <BiSolidGrid className="text-white " size={30} />
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {appContextArray?.map((el) => (
              <TabItem
                key={el.title}
                title={el.title!}
                isActive={el.isActive!}
                image={el.icon!}
                appId={el.appId!}
              />
            ))}
          </div>
        </div>
        <Start isOpened={isOpen} onToggle={onToggle} />
      </div>
    </>
  );
}

export default Bar;
