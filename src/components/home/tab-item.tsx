import { cn } from "../../lib/utils";
import { useIsHovered } from "../../hooks/useIsHovered";
import { WindowIds } from "../../context/window-context";
import { useWindowContext } from "../../hooks/useWindowContext";
import { useThemeColors } from "@/hooks/useColorScheme";

function TabItem({
  image,
  isActive,
  title,
  appId,
}: {
  image: string;
  isActive: boolean;
  title: string;
  appId: WindowIds;
}) {
  const {accent}=useThemeColors()
  const { _onMouseEnter, _onMouseLeave, hovered } = useIsHovered();
  const appContext = useWindowContext();

  const _onClick = () => {
    if (isActive) return;
    appContext?.activateWindow(appId);
  };

  return (
    <div
      onClick={_onClick}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
      className={cn(
        // Added "group" here so we can detect clicks on the entire container
        "group flex items-center justify-center flex-col relative cursor-pointer z-30"
      )}
    >
      <div
        className={cn(
          `${accent} absolute -left-3 w-1  top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out`,
          isActive ? "h-[110%] rounded-[2px]" : "h-1 rounded-full opacity-60"
        )}
      />

      <img
        src={image}
        className={cn(
          "w-[23px] transition-all duration-200 ease-in-out group-active:scale-75", 
          hovered ? "opacity-80" : "opacity-100"
        )}
        alt={title + " Image"}
      />
    </div>
  );
}

export default TabItem;