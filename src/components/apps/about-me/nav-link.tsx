import React from "react";
import { cn } from "../../../lib/utils";
import { useThemeColors } from "@/hooks/useColorScheme";
interface NavLinkProps {
  title: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}
function NavLink(props: NavLinkProps) {
  const { accent } = useThemeColors();
  return (
    <button
      onClick={() => props.onClick && props.onClick()}
      className={cn(
        " p-2 w-full font-semibold flex items-center rounded-md gap-2",
        props.isActive
          ? `${accent} transition-colors duration-300 text-dark-base`
          : "cursor-pointer hover:bg-dark-highlight text-white"
      )}
    >
      <span>{props.icon}</span> {props.title}
    </button>
  );
}

export default NavLink;
