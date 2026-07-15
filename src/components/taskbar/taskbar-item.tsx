import React from "react";
import { TaskbarItemProps } from "../../interfaces/taskbar";
import { useWindowContext } from "@/hooks/useWindowContext";
import { useThemeColors } from "@/hooks/useColorScheme";

function TaskbarItem({ image, windowId }: TaskbarItemProps) {
  const { allWindowConfig,activateWindow } = useWindowContext();

  const {hoveredAccent}=useThemeColors()
  const app = allWindowConfig![windowId];

  function _onLaunch() {
  
    activateWindow(windowId);
  }
  return (
    <div
      onClick={() => _onLaunch()}
      className={`flex gap-2 items-center cursor-pointer ${hoveredAccent} hover:text-dark-base p-2`}
    >
      <img src={image} className="w-[13%]" alt={`Image of ${app.title}`} />
      <div className="">{app.title} </div>
    </div>
  );
}

//Memo help it not redownload images
export default React.memo(TaskbarItem);
