import React from "react";
import { cn } from "../../../lib/utils";
interface NavLinkProps {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}
function NavLink(props: NavLinkProps) {
  return (
    <button
      onClick={() => props.onClick && props.onClick()}
      className={cn(
        " p-2 w-full font-semibold flex items-center rounded-md gap-2",
        props.isActive
          ? "bg-highlight text-dark-base "
          : "cursor-pointer hover:bg-dark-highlight text-white"
      )}
    >
      <span>{props.icon}</span> {props.title}
    </button>
  );
}

export default NavLink;
